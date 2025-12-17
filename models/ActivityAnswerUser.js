const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class ActivityAnswerUser extends Model {}

ActivityAnswerUser.init(
    {
        id: { type: DataTypes.BIGINT, primaryKey: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        activity_id: { type: DataTypes.INTEGER, allowNull: false },
        answer_id: { type: DataTypes.INTEGER, allowNull: false },
        answer_question_id: { type: DataTypes.INTEGER, allowNull: false },
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
