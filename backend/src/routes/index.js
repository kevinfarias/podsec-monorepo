import express from 'express';
import * as indexController from '../controllers/indexController';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.get('/', indexController.homePage);

// NIVEIS DO REST:
// 1. nao respeita corretamente os metodos nem mantem padroes, nivel 1 do rest
// 2. buscamos: implementar as coisas seguindo os metodos HTTP, 
// e as respostas de acordo, usar nomenclatura que façam sentidos
// 3. rest auto navegavel:

// GET /products -> traz registros
// POST /products -> insere um novo registro
// PUT /products/1 -> atualiza um registro
// DELETE /products/1 -> deleta um registro
// GET /producots/1 -> traz detalhes de um registro

//// TESTES UNITÁRIOS: voce testa a menor parte possivel do teu código
//// TESTES INTEGRAÇÃO: voce testa mais tecnologias
//// TESTES END-TO-END: (futuro)

export default routes;
