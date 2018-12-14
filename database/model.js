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

module.exports = user;