const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Achievement extends Model {}

Achievement.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING(45), allowNull: false },
        type: { type: DataTypes.ENUM('gold', 'silver', 'bronze'), allowNull: false, defaultValue: 'bronze' },
        text: { type: DataTypes.STRING(100) },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'achievement',
        underscored: true,
        timestamps: true
    }
);

module.exports = Achievement;
