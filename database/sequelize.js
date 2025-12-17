const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(
    'rankio',
    'root',
    'junior',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;
