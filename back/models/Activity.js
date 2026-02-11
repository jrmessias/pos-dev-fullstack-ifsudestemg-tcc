const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/sequelize');

class Activity extends Model {
}

Activity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        discipline_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'discipline',
                key: 'id'
            }
        },
        name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT
        },
        active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'activity',
        underscored: true,
        timestamps: true
    }
);

module.exports = Activity;
