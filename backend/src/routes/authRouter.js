import express from 'express';
import * as authController from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';
// import { bruteForceMiddleware } from '../middlewares/bruteForceMiddleware';

// eslint-disable-next-line new-cap
const authRouter = express.Router();

authRouter.get('/', authMiddleware, authController.get);
authRouter.post('/login', authController.login);

// TODO: implementar validação brute force no login

export default authRouter;
