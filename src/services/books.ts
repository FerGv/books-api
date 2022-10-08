// Interfaces
import { IBook, IBookCreation } from '../interfaces';

// Models
import { Book } from '../models';

export const createBook = async (data: IBookCreation) => {
  const book = await Book.create(data);

  return book;
};

export const deleteBook = async (id: string) => {
  await Book.destroy({ where: { id } });
};

export const getBook = async (id: string) => {
  const [book = {}] = await Book.findAll({ where: { id } });

  return book;
};

export const getBooks = async () => {
  const books = await Book.findAll();

  return books;
};

export const updateBook = async (id: string, data: IBook) => {
  await Book.update(data, { where: { id } });
  const book = await getBook(id);

  return book;
};
