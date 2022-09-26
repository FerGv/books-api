// Libraries
import { Sequelize } from 'sequelize';

// Config
import config from '../config/index.js';

export const dbConn = new Sequelize(config.DB_URL);

console.log(`DB connected to ${config.DB_URL}`);
