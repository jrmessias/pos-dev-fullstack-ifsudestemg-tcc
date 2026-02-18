const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class AchievementUser extends Model {}

AchievementUser.init(
    {
        achievement_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'achievement',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'achievement_user',
        underscored: true,
        timestamps: true
    }
);

module.exports = AchievementUser;
