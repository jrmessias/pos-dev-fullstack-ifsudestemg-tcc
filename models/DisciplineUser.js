const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class DisciplineUser extends Model {}

DisciplineUser.init(
    {
        discipline_id: { type: DataTypes.INTEGER, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'discipline_user',
        underscored: true,
        timestamps: true
    }
);

module.exports = DisciplineUser;
