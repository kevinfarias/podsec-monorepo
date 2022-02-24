import Redis from 'ioredis';
import { RateLimiterRedis } from 'rate-limiter-flexible';

const redisUrl = process.env.REDIS_URL || 'redis:6379';
const redisUrlPort = redisUrl.split(':');
const redisClient = new Redis({ 
    port: redisUrlPort[1],
    host: redisUrlPort[0],
    enable_offline_queue: false 
});

redisClient.on('error', err => {
    console.log('error on connect', err);
    
    return new Error();
});

const maxWrongAttemptsByIPperDay = 50;
const maxConsecutiveFailsByEmailAndIP = 10; 

const limiterSlowBruteByIP = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'login_fail_ip_per_day',
    // maximum number of failed logins allowed. 1 fail = 1 point
    // each failed login consumes a point
    points: maxWrongAttemptsByIPperDay,
    // delete key after 24 hours
    duration: 60 * 60 * 24,
    // number of seconds to block route if consumed points > points
    blockDuration: 60 * 60 * 24 // Block for 1 day, if 100 wrong attempts per day
});

const limiterConsecutiveFailsByUsernameAndIP = new RateLimiterRedis({
    storeClient: redisClient,
    keyPrefix: 'login_fail_consecutive_email_and_ip',
    points: maxConsecutiveFailsByEmailAndIP,
    duration: 60 * 60, // Delete key after 1 hour
    blockDuration: 60 * 60 // Block for 1 hour
});

const getUsernameIPkey = (username, ip) => `${username}_${ip}`;

const areWeTesting = () => process.env.NODE_ENV === 'test';

export const bruteForceMiddleware = async (req, res, next) => {
    if (areWeTesting()) {
        return next();
    }

    const ipAddr = req.ip;
    const emailIPkey = getUsernameIPkey(req.body.username, ipAddr);
    
    // get keys for attempted login
    const [resEmailAndIP, resSlowByIP] = await Promise.all([
        limiterConsecutiveFailsByUsernameAndIP.get(emailIPkey),
        limiterSlowBruteByIP.get(ipAddr)
    ]);
    
    let retrySecs = 0;
    
    // Check if IP or email + IP is already blocked
    if (resSlowByIP !== null && resSlowByIP.consumedPoints > maxWrongAttemptsByIPperDay) {
        retrySecs = Math.round(resSlowByIP.msBeforeNext / 1000) || 1;
    } else if (resEmailAndIP !== null && 
               resEmailAndIP.consumedPoints > maxConsecutiveFailsByEmailAndIP) {
        retrySecs = Math.round(resEmailAndIP.msBeforeNext / 1000) || 1;
    }
            
    // the IP and email + ip are not rate limited  
    if (retrySecs > 0) {
        // sets the response’s HTTP header field
        res.set('Retry-After', String(retrySecs));
        res
        .status(429)
        .send(`Too many requests. Retry after ${retrySecs} seconds.`);
    } else {
        const promises = [limiterSlowBruteByIP.consume(ipAddr)];
        
        promises.push(limiterConsecutiveFailsByUsernameAndIP.consume(emailIPkey));

        try {
            await Promise.all(promises);

            next();
        } catch (e) {
            console.log('testeee', e);

            res.set('Retry-After', String(retrySecs));
            res
            .status(429)
            .send(`Too many requests. Retry after ${retrySecs} seconds.`);
        }
    }
};