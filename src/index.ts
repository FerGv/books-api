// Libraries
import chalk from 'chalk';
import figlet from 'figlet';

// App
import { app } from '@/app';

// Config
import config from '@/config';

// DB
import { dbConn } from '@/db/connection';

// Utils
import { log } from '@/utils/logging';

const main = async () => {
  await dbConn.sync({ alter: true });
  log('All models were synchronized successfully.', { color: chalk.green });
  app.listen({
    host: config.app.HOST,
    port: config.app.PORT,
  });
  log(`Listening on ${config.app.URL}`);
  console.log(figlet.textSync('BOOKS API'));
  log(`DEV mode: ${config.IS_DEV}\nPROD mode: ${config.IS_PROD}`, { color: chalk.red });
};

main();
