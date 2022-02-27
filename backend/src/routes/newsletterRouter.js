import express from 'express';
import * as newsletterController from '../controllers/newsletterController';

// eslint-disable-next-line new-cap
const newsletterRouter = express.Router();

newsletterRouter.get('/', newsletterController.getAll);
newsletterRouter.post('/', newsletterController.post);
newsletterRouter.put('/:id/', newsletterController.put);
newsletterRouter.get('/:id/', newsletterController.getById);

/* 
    TODO: finalizar demais métodos http:

    GET /newsletter -> retorna todos os dados (metodo get)
    POST /newsletter -> insere uma nova newsletter
    PUT /newsletter/1 -> edita o newsletter com id 1
    DELETE /newsletter/1 -> deleta a newsletter com id 1
    GET /newsletter/1 -> busca detalhes de uma newsletter com o id 1
*/

export default newsletterRouter;
