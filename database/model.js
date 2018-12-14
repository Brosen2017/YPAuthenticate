const sequelize = require("sequelize");
const connection = require("./index.js");

const user = connection.define("user", {
  userId: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstname: {
    type: sequelize.STRING,
    allowNull: false
  },
  lastname: {
    type: sequelize.STRING,
    allowNull: false
  },
  email: {
    type: sequelize.STRING,
    allowNull: false
  },
  password: {
    type: sequelize.STRING,
    allowNull: false
  },
  zipcode: {
    type: sequelize.INTEGER,
    allowNull: false
  }
});

connection
  .sync()
  .then(() => console.log("synced with mysql database"))
  .catch(err => console.error(err));

module.exports = user;
