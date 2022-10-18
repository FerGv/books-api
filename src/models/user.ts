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

export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare uuid: CreationOptional<string>;
  declare email: string;
  declare password: string;
  declare username: string;
}

User.init(
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
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING,
  },
  {
    sequelize: dbConn,
    modelName: 'User',
    tableName: 'users',
  },
);
