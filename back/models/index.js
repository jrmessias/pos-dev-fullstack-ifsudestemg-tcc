const sequelize = require('../database/sequelize');

const User = require('./User');
const Discipline = require('./Discipline');
const Activity = require('./Activity');
const Question = require('./Question');
const Answer = require('./Answer');
const DisciplineUser = require('./DisciplineUser');
const ActivityAnswerUser = require('./ActivityAnswerUser');
const Achievement = require('./Achievement');
const AchievementUser = require('./AchievementUser');
const Level = require('./Level');

User.hasMany(Discipline, { foreignKey: 'user_id' });
User.hasMany(Achievement, { foreignKey: 'user_id', as: 'CreatedAchievements' });
User.belongsToMany(Achievement, {
    through: AchievementUser,
    foreignKey: 'user_id',
    otherKey: 'achievement_id',
    as: 'Achievements',
});
User.belongsToMany(Discipline, {
    through: DisciplineUser,
    foreignKey: 'user_id',
    otherKey: 'discipline_id',
});
User.hasMany(ActivityAnswerUser, { foreignKey: 'user_id' });

Discipline.belongsTo(User, { foreignKey: 'user_id' });
Discipline.hasMany(Activity, { foreignKey: 'discipline_id' });
Discipline.belongsToMany(User, {
    through: DisciplineUser,
    foreignKey: 'discipline_id',
    otherKey: 'user_id',
});

Achievement.belongsTo(User, { foreignKey: 'user_id', as: 'Creator' });
Achievement.belongsToMany(User, {
    through: AchievementUser,
    foreignKey: 'achievement_id',
    otherKey: 'user_id',
    as: 'Students',
});

Activity.belongsTo(Discipline, { foreignKey: 'discipline_id' });
Activity.hasMany(Question, { foreignKey: 'activity_id' });
Activity.hasMany(ActivityAnswerUser, { foreignKey: 'activity_id' });

Question.belongsTo(Activity, { foreignKey: 'activity_id' });
Question.hasMany(Answer, { foreignKey: 'question_id' });
Question.hasMany(ActivityAnswerUser, { foreignKey: 'question_id' });

Answer.belongsTo(Question, { foreignKey: 'question_id' });
Answer.hasMany(ActivityAnswerUser, { foreignKey: 'answer_id' });

ActivityAnswerUser.belongsTo(User, { foreignKey: 'user_id' });
ActivityAnswerUser.belongsTo(Activity, { foreignKey: 'activity_id' });
ActivityAnswerUser.belongsTo(Answer, { foreignKey: 'answer_id' });
ActivityAnswerUser.belongsTo(Question, { foreignKey: 'question_id' });

module.exports = {
    sequelize,
    User,
    Discipline,
    Activity,
    Question,
    Answer,
    DisciplineUser,
    ActivityAnswerUser,
    Achievement,
    AchievementUser,
    Level,
};
