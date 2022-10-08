// Libraries
import { Router } from 'express';

// Routes
import { bookRouter } from './books';

export const router = Router();

router.use('/books', bookRouter);
