const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/sequelize');

class Question extends Model {
}

Question.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    activity_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'activity',
            key: 'id'
        }
    },
    name: {
        type: DataTypes.STRING(255)
    },
    text: {
        type: DataTypes.STRING(255)
    },
    type: {
        type: DataTypes.STRING(45)
    },
}, {
    sequelize,
    freezeTableName: true,
    tableName: 'question',
    underscored: true,
    timestamps: true,
});

Question.associate = (models) => {
    Question.belongsTo(models.Activity, {
        foreignKey: 'activity_id'
    });

    Question.hasMany(models.Answer, {
        foreignKey: 'question_id'
    });
};


module.exports = Question;
