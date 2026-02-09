const {DataTypes, Model} = require('sequelize');
const sequelize = require('../database/sequelize');

class DisciplineUser extends Model {
}

DisciplineUser.init(
    {
        discipline_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            nullable: false,
            references: {
                model: 'discipline',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            nullable: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        tableName: 'discipline_user',
        underscored: true,
        timestamps: true
    }
);

DisciplineUser.associate = (models) => {
    DisciplineUser.belongsTo(models.User, {
        foreignKey: 'user_id'
    });

    DisciplineUser.belongsTo(models.Discipline, {
        foreignKey: 'discipline_id'
    });
};

module.exports = DisciplineUser;
