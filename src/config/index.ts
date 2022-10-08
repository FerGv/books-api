// Libraries
import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: Number(process.env.PORT) || 7001,

  db: {
    HOST: process.env.DB_HOST,
    NAME: process.env.DB_NAME,
    PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.DB_PORT,
    TYPE: process.env.DB_TYPE,
    USER: process.env.DB_USER,
  },
};
