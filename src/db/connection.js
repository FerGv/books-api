// Libraries
import chalk from 'chalk';
import { Sequelize } from 'sequelize';

// Config
import config from '../config/index.js';

// Utils
import { log } from '../utils/logging.js';

export const dbConn = new Sequelize(config.DB_URL);

log(`DB connected to ${config.DB_URL}`, { color: chalk.yellow });
