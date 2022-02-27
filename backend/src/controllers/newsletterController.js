import { getStatusCode, StatusCodes } from 'http-status-codes';
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
        const nextId = (await db.NewsletterModelos.max('id') || 0) + 1;
        const result = await db.NewsletterModelos.create({ ...rowData, id: nextId });
        return res.json(result);
    } catch (err) {
        return res.status(StatusCodes.BAD_GATEWAY).send('Não foi possivel inserir registro.');
    }
};

export const put = ('/:id', async (req, res) => {

    const { id } = req.params;

    if (!id)
        return res.status(400).send('Parametro Invalido.');

    const rowData = req.body;

    try {
        await db.NewsletterModelos.update({ ...rowData }, {
            where: {
                id: id,
            },
        })
        return res.status(StatusCodes.OK).send(rowData);

    } catch (err) {
        return res.status(StatusCodes.BAD_GATEWAY).send('Não foi possivel inserir registro.');
    }
});

export const getById = ('/:id', async (req, res) => {

    const { id } = req.params;

    if (!id)
        return res.status(400).send('Parametro Invalido.');

    try {

        const rowData = await db.NewsletterModelos.findOne({
            where: {
                id: id,
            }
        })
        return res.status(StatusCodes.OK).send(rowData);

    } catch (err) {
        return res.status(StatusCodes.BAD_GATEWAY).send('Não foi possivel inserir registro.');
    }
});
