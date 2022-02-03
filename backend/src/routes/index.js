import express from 'express';
import * as indexController from '../controllers/indexController';

const routes = express.Router();

routes.get('/', indexController.homePage);

export default routes;
