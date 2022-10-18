// Libraries
import request from 'supertest';

// App
import { app } from '@/app';

// Interfaces
import { IBookCreation } from '@/interfaces';

// Models
import { Book } from '@/models';

const BASE_URI = '/api/books';
const INITIAL_BOOKS: IBookCreation[] = [
  {
    author: 'Author test',
    editorial: 'Editorial test',
    title: 'Title test',
    year: 1999,
  },
  {
    author: 'Author test 2',
    editorial: 'Editorial test 2',
    title: 'Title test 2',
    year: 2000,
  },
];

beforeEach(async () => {
  await Book.sync({ force: true });
  await Book.bulkCreate(INITIAL_BOOKS);
});

describe('Testing Books API', () => {
  it('GET /books should return an array of books', async () => {
    const res = await request(app).get(BASE_URI);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveLength(INITIAL_BOOKS.length);
  });

  it('POST /books should return an object containing an "id"', async () => {
    const res = await request(app).post(BASE_URI).send(INITIAL_BOOKS[0]);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });

  it('GET /books/:id should return a book', async () => {
    const res = await request(app).get(`${BASE_URI}/1`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('author', INITIAL_BOOKS[0].author);
  });

  it('PUT /books/:id should return an object with the new data', async () => {
    const res = await request(app).put(`${BASE_URI}/1`).send(INITIAL_BOOKS[1]);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('author', INITIAL_BOOKS[1].author);
  });

  it('DELETE /books/:id should return a status code 204 and no content', async () => {
    const res = await request(app).delete(`${BASE_URI}/1`);
    expect(res.statusCode).toBe(204);
    expect(Object.keys(res.body)).toHaveLength(0);
  });
});
