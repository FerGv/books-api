// Libraries
import { Router } from 'express';

// Routes
import { bookRouter } from './books.js';

export const router = new Router();

router.use('/books', bookRouter);
