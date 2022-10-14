// Libraries
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';

// Plugins
import { createMorganTokens } from './plugins/morgan';

// Routes
import { router } from './routes';

createMorganTokens();
export const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan(':date[web] :method-color :status-color :url'));

// Routes
app.use('/api', router);
