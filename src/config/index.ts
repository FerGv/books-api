// Libraries
import dotenv from 'dotenv';

dotenv.config();

const IS_DEV = process.env.NODE_ENV === 'development';
const IS_PROD = process.env.NODE_ENV === 'production';
const IS_TEST = process.env.NODE_ENV === 'test';

export default {
  IS_DEV,
  IS_PROD,
  IS_TEST,
  PORT: Number(process.env.PORT) || 7001,

  db: {
    HOST: process.env.DB_HOST || 'localhost',
    LOGGING: IS_PROD || IS_TEST ? false : null,
    NAME: process.env.DB_NAME!,
    PASSWORD: process.env.DB_PASSWORD!,
    PORT: Number(process.env.DB_PORT) || 3306,
    TYPE: process.env.DB_TYPE || 'mysql',
    USER: process.env.DB_USER!,
  },

  jwt: {
    SECRET: process.env.JWT_SECRET!,
    EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  },
};
