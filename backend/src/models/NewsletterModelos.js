import { DataTypes } from 'sequelize';
import database from '../database';

const NewsletterModelos = database.define('newsletter_modelos', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, null);

// TODO: finalizar model

export default NewsletterModelos;