import { StatusCodes } from 'http-status-codes';
import Joi from 'joi';
import db from '../models/index.js';

export const get = async (req, res) => {
    const dados = await db.Usuarios.findOne({ id: req.usuario.id });

    return res.status(StatusCodes.OK).send(dados);
};

export const login = async (req, res) => {
    const schema = Joi.object({
        username: Joi.string().alphanum().min(3).max(30).required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    });

    const {
        error, value 
    } = schema.validate(req.body);

    if (error) {
        return res.sendStatus(StatusCodes.BAD_REQUEST);
    }

    const usuario = await db.Usuarios.findOne({ where: { usuario: value.username } });

    if (!usuario) {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }

    if ((await usuario.verifyPassword(value.password))) {
        const {
            token, expires 
        } = usuario.generateJWTToken();

        return res.status(StatusCodes.OK).json({
            jwtToken: token,
            expires
        });
    } else {
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
};