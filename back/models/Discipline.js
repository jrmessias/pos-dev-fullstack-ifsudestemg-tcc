const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Discipline extends Model {}

Discipline.init(
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING(45), allowNull: false },
        key: { type: DataTypes.STRING(50), allowNull: false },
        description: { type: DataTypes.STRING(255) },
        active: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'discipline',
        underscored: true,
        timestamps: true
    }
);

Discipline.associate = (models) => {
    Discipline.belongsTo(models.User, {
        foreignKey: 'user_id',
        as: 'owner'
    });

    Discipline.belongsToMany(models.User, {
        through: models.DisciplineUser,
        foreignKey: 'discipline_id',
        otherKey: 'user_id',
        as: 'users'
    });

    Discipline.hasMany(models.Activity, {
        foreignKey: 'discipline_id'
    });
};

module.exports = Discipline;
