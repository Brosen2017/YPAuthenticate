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
  },
  address: {
    type: sequelize.STRING,
    allowNull: true
  },
  city: {
    type: sequelize.STRING,
    allowNull: true
  },
  state: {
    type: sequelize.STRING,
    allowNull: true
  },
  company: {
    type: sequelize.STRING,
    allowNull: true
  },
  website: {
    type: sequelize.STRING,
    allowNull: true
  },
  photo: {
    type: sequelize.STRING,
    allowNull: true
  }
});

connection
  .sync({force: false})
  .then(() => console.log("synced with PSQL database"))
  .catch(err => console.error(err));

module.exports = user;
