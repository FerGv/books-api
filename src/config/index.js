// Libraries
import dotenv from 'dotenv';

dotenv.config();

export default {
  DB_URL: process.env.DB_URL,
  PORT: Number(process.env.PORT) || 7001,
};
