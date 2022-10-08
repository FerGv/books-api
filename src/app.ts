// Libraries
import cors from 'cors';
import express from 'express';
import figlet from 'figlet';
import morgan from 'morgan';

// Config
import config from './config';

// Plugins
import { createMorganTokens } from './plugins/morgan';

// Routes
import { router } from './routes';

// Utils
import { log } from './utils/logging';

const main = () => {
  createMorganTokens();
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());
  app.use(morgan(':date[web] :method-color :status-color :url'));

  app.use('/api', router);
  app.listen(config.PORT);
  log(`Listening on http://localhost:${config.PORT}`);
  console.log(figlet.textSync('BOOKS API'));
};

main();
