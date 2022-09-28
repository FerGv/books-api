// Libraries
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

// Config
import config from './config/index.js';

// Plugins
import { createTokens } from './plugins/morgan.js';

// Routes
import { router } from './routes/index.js';

// Utils
import { log } from './utils/logging.js';

const main = () => {
  createTokens();
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());
  app.use(morgan(':date[web] :method-color :status-color :url'));

  app.use('/api', router);
  app.listen(config.PORT);
  log(`Listening on port ${config.PORT}`);
};

main();
