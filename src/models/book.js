// Libraries
import { DataTypes, Model } from 'sequelize';

// Config
import { dbConn } from '../db/connection.js';

export class Book extends Model {}

Book.init(
  {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    editorial: DataTypes.STRING,
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
  },
  {
    sequelize: dbConn,
    modelName: 'Book',
    tableName: 'books',
  },
);
await Book.sync({ alter: true });
