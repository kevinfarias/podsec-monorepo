import config from './config/config';
import { Sequelize } from 'sequelize';

const database = new Sequelize(config[process.env.ENV ?? 'development']);

export default database;