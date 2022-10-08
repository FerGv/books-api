// Libraries
import chalk from 'chalk';
import { Sequelize } from 'sequelize';

// Config
import config from '../config';

// Utils
import { log } from '../utils/logging';

const DB_URL = `${config.db.TYPE}://${config.db.USER}:${config.db.PASSWORD}@${config.db.HOST}:${config.db.PORT}/${config.db.NAME}`;
export const dbConn = new Sequelize(DB_URL);
log(`DB connected to ${DB_URL}`, { color: chalk.yellow });

(async () => {
  await dbConn.sync({ force: true });
  log('All models were synchronized successfully.', { color: chalk.green });
})();
