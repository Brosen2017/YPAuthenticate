const sequelize = require('sequelize');
const connection = require('./index.js');

const user = connection.define('user',{
    userId: {
        type: sequelize.INTEGER, primaryKey: true, autoIncrement: true
    },
    name: {
       type: sequelize.STRING, allowNull: false
    },
    password: {
        type: sequelize.STRING, allowNull: false
     }
})

connection
.sync({force: false})
.then(() => console.log("synced with mysql database"))
.catch(err => console.error(err));

module.exports = user;