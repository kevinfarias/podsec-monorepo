import express from 'express';
import * as indexController from '../controllers/indexController';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.get('/', indexController.homePage);

export default routes;
