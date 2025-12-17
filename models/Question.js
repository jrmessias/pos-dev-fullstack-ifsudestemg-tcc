const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/sequelize');

class Question extends Model {
}

Question.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    activity_id: {type: DataTypes.INTEGER, allowNull: false},
    title: {type: DataTypes.STRING(45)},
    type: {type: DataTypes.STRING(45)},
}, {
    sequelize,
    freezeTableName: true,
    tableName: 'question',
    underscored: true,
    timestamps: true,
});

module.exports = Question;
