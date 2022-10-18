// Libraries
import { Router } from 'express';

// Services
import { bookService } from '@/services';

export const bookRouter = Router();

bookRouter.get('/', async (req, res) => {
  const books = await bookService.getBooks();
  res.json(books);
});

bookRouter.post('/', async (req, res) => {
  const book = await bookService.createBook(req.body);
  res.status(201).json(book);
});

bookRouter.get('/:id', async (req, res) => {
  const book = await bookService.getBook(req.params.id);
  res.send(book);
});

bookRouter.put('/:id', async (req, res) => {
  const book = await bookService.updateBook(req.params.id, req.body);
  res.send(book);
});

bookRouter.delete('/:id', async (req, res) => {
  await bookService.deleteBook(req.params.id);
  res.sendStatus(204);
});
