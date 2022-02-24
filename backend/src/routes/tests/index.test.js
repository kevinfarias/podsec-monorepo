import app from '../../app';
import supertest from 'supertest';

const request = supertest(app);

let userToken = '';
    
beforeAll(() => new Promise(async (resolve, _reject) => {
    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'admin';
    
    const res = await request.post('/auth/login').send({
        username,
        password
    });
    
    userToken = res.body.jwtToken;

    resolve();
}));
describe('Testing index routes: /', () => {
    it('Testing if GET returns data', async () => {
        const res = await request.get('/').set({ Authentication: `Bearer ${userToken}` });
        
        expect(res.status).toBe(200);
        expect(res.body.content).toBe('hello world coming from backend');
    });
});