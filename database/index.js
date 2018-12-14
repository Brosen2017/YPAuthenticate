const sequelize = require('sequelize');

let connection = new sequelize('userDB', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

connection.sync({force: false})
.then(()=>{
    console.log('successfully connected to sqlDB')
})
.catch(err =>{
    console.log(err)
})

module.exports = connection;