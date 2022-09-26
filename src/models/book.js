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
  },
  { sequelize: dbConn, modelName: 'Book', timestamps: false },
);
