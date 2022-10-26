// Libraries
import jwt from 'jsonwebtoken';
import request from 'supertest';

// App
import { app } from '@/app';

// Config
import config from '@/config';

// Interfaces
import { IUserCreation } from '@/interfaces';

// Models
import { User } from '@/models';

// Utils
import { hashPassword, validatePassword } from '@/utils/auth';

const BASE_URI = '/api/auth';
const INITIAL_USERS: IUserCreation[] = [
  {
    email: 'test@test.com',
    password: 'test',
    username: 'User test',
  },
  {
    email: 'test2@test.com',
    password: 'test2',
    username: 'User test 2',
  },
];
const PLAIN_TEXT_PASSWORD = 'supersecretpassword';

beforeEach(async () => {
  await User.sync({ force: true });
});

describe('Testing Auth utils', () => {
  it('should encrypt password', async () => {
    const hashedPassword = await hashPassword(PLAIN_TEXT_PASSWORD);
    expect(hashedPassword).not.toBe(PLAIN_TEXT_PASSWORD);
  });

  it('should verify hashed password', async () => {
    const hashedPassword = await hashPassword(PLAIN_TEXT_PASSWORD);
    const validPassword = await validatePassword(PLAIN_TEXT_PASSWORD, hashedPassword);
    expect(validPassword).toBe(true);
  });
});

describe('Testing Auth API', () => {
  it('POST /auth/login should return a JWT', async () => {
    await request(app).post(`${BASE_URI}/register`).send(INITIAL_USERS[0]);
    const res = await request(app).post(`${BASE_URI}/login`).send(INITIAL_USERS[0]);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
    expect(jwt.verify(res.body.token, config.jwt.SECRET)).toHaveProperty('username');
  });

  it('POST /auth/login should return a status code 400 if user and/or password are incorrect', async () => {
    const res = await request(app).post(`${BASE_URI}/login`).send({
      username: 'fake',
      password: 'fake',
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it('POST /auth/register should create an user', async () => {
    const res = await request(app).post(`${BASE_URI}/register`).send(INITIAL_USERS[0]);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('username');
  });

  // it('POST /auth/password/recover should return a link', async () => {
  //   const res = await request(app).post(`${BASE_URI}/password/recover`);
  //   expect(res.statusCode).toBe(200);
  //   expect(res.body).toHaveProperty('link');
  //   expect(res.body.link).toMatch(/^https?:\/\//);
  // });

  // it('POST /auth/password/reset should return a status 204', async () => {
  //   const res = await request(app).post(`${BASE_URI}/password/reset`);
  //   expect(res.statusCode).toBe(204);
  //   expect(Object.keys(res.body)).toHaveLength(0);
  // });

  // it('POST /auth/password/change should return a status 204', async () => {
  //   const res = await request(app).post(`${BASE_URI}/password/change`);
  //   expect(res.statusCode).toBe(204);
  //   expect(Object.keys(res.body)).toHaveLength(0);
  // });
});
