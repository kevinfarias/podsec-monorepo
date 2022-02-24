import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import db from '../models/index';

export const authMiddleware = (req, res, next) => {
    const tokenParts = 
        (req.headers['authentication'] || req.headers['Authentication'] || '').split(' ');

    const token = tokenParts[1];
    
    if (!token) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            auth: false,
            message: 'No token provided.' 
        });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                auth: false,
                message: 'Failed to authenticate token.' 
            });
        }
        
        // se tudo estiver ok, salva no request para uso posterior
        req.usuarioId = decoded.id;
        req.usuario = await db.Usuarios.findOne({ where: { id: decoded.id } });
        
        next();
    });
};