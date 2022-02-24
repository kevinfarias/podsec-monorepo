import express from 'express';
import * as indexController from '../controllers/indexController';
import { authMiddleware } from '../middlewares/authMiddleware';
import authRouter from './authRouter';
import newsletterRouter from './newsletterRouter';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.get('/', authMiddleware, indexController.homePage);
routes.use('/auth', authRouter);
routes.use('/newsletter', newsletterRouter);

// NIVEIS DO REST:
// 1. nao respeita corretamente os metodos nem mantem padroes, nivel 1 do rest
// 2. buscamos: implementar as coisas seguindo os metodos HTTP, 
// e as respostas de acordo, usar nomenclatura que façam sentidos
// 3. rest auto navegavel:

// GET /products -> traz registros
// POST /products -> insere um novo registro
// PUT /products/1 -> atualiza um registro
// DELETE /products/1 -> deleta um registro
// GET /products/1 -> traz detalhes de um registro

export default routes;
