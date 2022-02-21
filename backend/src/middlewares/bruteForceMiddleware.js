import ExpressBrute from 'express-brute';
import RedisStore from 'express-brute-redis';
import { StatusCodes } from 'http-status-codes';

export const bruteForceMiddleware = () => {
    const store = new RedisStore({
        host: 'redis',
        port: 6379
    });

    const oneSecondInMiliseconds = 1000;
    const oneMinuteInSeconds = 60;
    const minWaitMinutes = 5;
    const maxWaitMinutes = 60;

    const bruteforce = new ExpressBrute(store, {
        freeRetries: 5,
        minWait: minWaitMinutes * oneMinuteInSeconds * oneSecondInMiliseconds,
	    maxWait: maxWaitMinutes * oneMinuteInSeconds * oneSecondInMiliseconds,
        // eslint-disable-next-line max-len
        failCallback: (_req, res) => res.status(StatusCodes.BAD_REQUEST).send({ message: 'Foram feitas muitas tentativas em um curto período de tempo, por favor, tente novamente em alguns segundos' })
    });

    return bruteforce.prevent;
};