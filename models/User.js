const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class User extends Model {}

User.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING(80), allowNull: false },
        email: { type: DataTypes.STRING(45), allowNull: false, unique: true },
        nickname: { type: DataTypes.STRING(45) }
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'user',
        underscored: true,
        timestamps: true
    }
);

User.associate = (models) => {
    User.hasMany(models.Discipline, { foreignKey: 'user_id' });
    User.belongsToMany(models.Discipline, {
        through: models.DisciplineUser,
        foreignKey: 'user_id'
    });
};

module.exports = User;
