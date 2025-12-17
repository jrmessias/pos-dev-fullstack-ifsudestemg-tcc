const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Discipline extends Model {}

Discipline.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING(45), allowNull: false },
        key: { type: DataTypes.STRING(10), allowNull: false },
        description: { type: DataTypes.STRING(255) },
        begin: { type: DataTypes.DATE },
        end: { type: DataTypes.DATE },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'discipline',
        underscored: true,
        timestamps: true
    }
);

module.exports = Discipline;
