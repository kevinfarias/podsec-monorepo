import { StatusCodes } from 'http-status-codes';
import db from '../models/index.js';

/// implementar crud
export const get = async (_req, res) => {
    const dados = await db.NewsletterModelos.findAll();

    // TODO: implementar paginacao

    return res.status(StatusCodes.OK).send({ linhas: dados });
};