import { StatusCodes } from 'http-status-codes';
import db from '../models/index.js';

/// implementar crud
export const getAll = async (_req, res) => {
    const rowData = await db.NewsletterModelos.findAll();

    // TODO: implementar paginacao

    return res.status(StatusCodes.OK).send(rowData);
};

export const post = async (req, res) => {
    const rowData = req.body;

    // TODO: validar se ja existe titulo cadastrado

    try {
        const result = await db.NewsletterModelos.create(rowData);

        return res.json(result);
    } catch (err) {
        return res.status(StatusCodes.BAD_GATEWAY).send('Não foi possivel inserir registro.');
    }
};

export const put = async (req, res) => {
    const { id } = req.params;

    try {
        const rowData = await db.NewsletterModelos.findOne({ where: { id } });

        if (rowData.id) {
            const rowData = req.body;

            await db.NewsletterModelos.update(rowData, { where: { id } });

            return res.status(StatusCodes.OK).send(rowData);
        }
    } catch (err) {
        return res.status(StatusCodes.BAD_GATEWAY).send('Não foi possivel inserir registro.');
    }
};

export const getById = async (req, res) => {
    const { id } = req.params;

    try {
        const rowData = await db.NewsletterModelos.findOne({ where: { id } });

        if (rowData.id) {
            return res.status(StatusCodes.OK).send(rowData);
        }
    } catch (err) {
        return res.status(StatusCodes.BAD_REQUEST).send('Não foi possivel encontrar um registro.');
    }
};