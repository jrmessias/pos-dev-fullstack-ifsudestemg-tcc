const {DataTypes, Model, Op} = require('sequelize');
const sequelize = require('../database/sequelize');

class Answer extends Model {
}

Answer.init(
    {
        id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
        question_id: {type: DataTypes.INTEGER, allowNull: false},
        title: {type: DataTypes.STRING(45), allowNull: false},
        text: {type: DataTypes.STRING(45), allowNull: false},
        correct: {type: DataTypes.BOOLEAN, defaultValue: false},
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'answer',
        underscored: true,
        timestamps: true,
        hooks: {
            async beforeSave(answer) {
                if (!answer.correct) return;
                const exists = await Answer.findOne({
                    where: {
                        question_id: answer.question_id,
                        correct: true,
                        id: {[Op.ne]: answer.id || 0}
                    }
                });

                if (exists) {
                    throw new Error('Já existe uma resposta correta para esta questão');
                }
            }
        }
    }
);

module.exports = Answer;
