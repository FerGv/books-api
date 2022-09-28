// Libraries
import cors from 'cors';
import express from 'express';

// Config
import config from './config/index.js';

// Routes
import { router } from './routes/index.js';

// Utils
import { log } from './utils/logging.js';

const main = () => {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(cors());

  app.use('/api', router);
  app.listen(config.PORT);
  log(`Listening on port ${config.PORT}`);
};

main();
