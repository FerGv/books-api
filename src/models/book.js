// Libraries
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('mysql://books_user:books123@localhost:3306/books');

class Book extends Model {}
Book.init(
  {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    year: DataTypes.INTEGER,
    editorial: DataTypes.STRING,
  },
  { sequelize, modelName: 'Book', timestamps: false },
);

(async () => {
  await sequelize.sync();
  const books = await Book.findAll();
  books.forEach((book) => console.log(book.toJSON()));
})();
