import express from 'express';
import * as indexController from '../controllers/indexController';

const router = express.Router();
router.get('/', indexController.homePage);

export default router;
