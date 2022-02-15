import { StatusCodes } from 'http-status-codes';
import NewsletterModelos from '../models/NewsletterModelos';

/// implementar crud
export const get = (_req, res) => {
    const dados = NewsletterModelos.findAll();

    // TODO: implementar paginacao

    return res.status(StatusCodes.OK).send({ linhas: dados });
};