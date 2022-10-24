// Libraries
import { Router } from 'express';

// Routes
import { authRouter } from './auth';
import { bookRouter } from './books';

export const router = Router();

router.use('/auth', authRouter);
router.use('/books', bookRouter);
