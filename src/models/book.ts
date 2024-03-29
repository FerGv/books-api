// Libraries
import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

// Config
import { dbConn } from '@/db/connection';

export class Book extends Model<InferAttributes<Book>, InferCreationAttributes<Book>> {
  declare id: CreationOptional<number>;
  declare uuid: CreationOptional<string>;
  declare author: string;
  declare editorial: string;
  declare title: string;
  declare year: number;
}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    author: DataTypes.STRING,
    editorial: DataTypes.STRING,
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
  },
  {
    sequelize: dbConn,
    modelName: 'Book',
    tableName: 'books',
  },
);
