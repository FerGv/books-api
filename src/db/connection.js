// Libraries
import chalk from 'chalk';
import { Sequelize } from 'sequelize';

// Config
import config from '../config/index.js';

// Utils
import { log } from '../utils/logging.js';

const DB_URL = `${config.db.TYPE}://${config.db.USER}:${config.db.PASSWORD}@${config.db.HOST}:${config.db.PORT}/${config.db.NAME}`;
export const dbConn = new Sequelize(DB_URL);

log(`DB connected to ${DB_URL}`, { color: chalk.yellow });
