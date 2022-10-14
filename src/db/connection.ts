// Libraries
import chalk from 'chalk';
import { Sequelize, Dialect } from 'sequelize';

// Config
import config from '../config';

// Utils
import { log } from '../utils/logging';

export const dbConn = new Sequelize(config.db.NAME, config.db.USER, config.db.PASSWORD, {
  dialect: config.db.TYPE as Dialect,
  host: config.db.HOST,
  logging: config.db.LOGGING ?? console.log,
  port: config.db.PORT,
});

if (!config.IS_TEST) {
  const DB_URL = [
    `${config.db.TYPE}://`,
    `${config.db.USER}:${config.db.PASSWORD}`,
    `@${config.db.HOST}:${config.db.PORT}/${config.db.NAME}`,
  ].join('');
  log(`DB connected to ${DB_URL}`, { color: chalk.yellow });
}
