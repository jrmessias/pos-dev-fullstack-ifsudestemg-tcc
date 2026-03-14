const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Level extends Model {}

Level.init(
    {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        level: { type: DataTypes.INTEGER, allowNull: false },
        xp_required: { type: DataTypes.BIGINT, allowNull: false },
        xp_to_next: { type: DataTypes.BIGINT, allowNull: false },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'levels',
        underscored: true,
        timestamps: true,
    }
);

module.exports = Level;
