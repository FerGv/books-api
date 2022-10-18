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
  app.listen(config.PORT);
  log(`Listening on http://localhost:${config.PORT}`);
  console.log(figlet.textSync('BOOKS API'));
};

main();
