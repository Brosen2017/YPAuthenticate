const sequelize = require("sequelize");

let connection = new sequelize("userDB", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
  port: "5432"
});

connection
  .authenticate()
  .then(() => {
    console.log("connected to the database!");
  })
  .catch(err => {
    console.error(err);
  });

module.exports = connection;
