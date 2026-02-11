const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class User extends Model {}

User.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(80), allowNull: false },
        email: { type: DataTypes.STRING(45), allowNull: false, unique: true },
        password: { type: DataTypes.STRING(100), allowNull: false },
        role: { type: DataTypes.STRING(10), allowNull: false },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'user',
        underscored: true,
        timestamps: true
    }
);

module.exports = User;
