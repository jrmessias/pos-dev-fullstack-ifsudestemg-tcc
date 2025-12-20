const sequelize = require('../database/sequelize');

const User = require('./User');
const Discipline = require('./Discipline');
const Activity = require('./Activity');
const Question = require('./Question');
const Answer = require('./Answer');
const DisciplineUser = require('./DisciplineUser');

User.hasMany(Discipline, { foreignKey: 'user_id' });

Discipline.belongsTo(User, { foreignKey: 'user_id' });
Discipline.hasMany(Activity, { foreignKey: 'discipline_id' });
Discipline.belongsToMany(User, {
    through: DisciplineUser,
    foreignKey: 'discipline_id',
});

Activity.belongsTo(Discipline, { foreignKey: 'discipline_id' });
Activity.hasMany(Question, { foreignKey: 'activity_id' });

Question.belongsTo(Activity, { foreignKey: 'activity_id' });
Question.hasMany(Answer, { foreignKey: 'question_id' });

Answer.belongsTo(Question, { foreignKey: 'question_id' });

module.exports = {
    sequelize,
    User,
    Discipline,
    Activity,
    Question,
    Answer,
    DisciplineUser,
};
