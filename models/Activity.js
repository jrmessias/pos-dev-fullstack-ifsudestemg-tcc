const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Activity extends Model {}

Activity.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        discipline_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING(45), allowNull: false },
        text: { type: DataTypes.TEXT },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'activity',
        underscored: true,
        timestamps: true
    }
);

module.exports = Activity;
