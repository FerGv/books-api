// Models
import { Book } from '../models/index.js';

export const createBook = async (data) => {
  const book = await Book.create(data);

  return book;
};

export const deleteBook = async (id) => {
  await Book.destroy({ where: { id } });
};

export const getBook = async (id) => {
  const [book = {}] = await Book.findAll({ where: { id } });

  return book;
};

export const getBooks = async () => {
  const books = await Book.findAll();

  return books;
};

export const updateBook = async (id, data) => {
  await Book.update(data, { where: { id } });
  const book = await getBook(id);

  return book;
};
