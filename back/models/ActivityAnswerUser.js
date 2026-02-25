const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class ActivityAnswerUser extends Model {}

ActivityAnswerUser.init(
    {
        id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        activity_id: { type: DataTypes.INTEGER, allowNull: false },
        answer_id: { type: DataTypes.INTEGER, allowNull: true },
        question_id: { type: DataTypes.INTEGER, allowNull: true },
        is_correct: { type: DataTypes.BOOLEAN, allowNull: true, defaultValue: false },
        answer_time: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
        xp: { type: DataTypes.INTEGER, allowNull: true, defaultValue: 0 },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'activity_answer_user',
        underscored: true,
        timestamps: true
    }
);

module.exports = ActivityAnswerUser;
