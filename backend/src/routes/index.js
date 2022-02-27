import express from 'express';
import * as indexController from '../controllers/indexController';
import newsletterRouter from './newsletterRouter';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.get('/', indexController.homePage);
routes.use('/newsletter', newsletterRouter);

export default routes;
