const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {

    // may need to add a method to verify password depending on authentication method
}

// boilerplate user template, fields might change depending on our needs
// connect users to categories
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        }
    },
    {
        // create hooks for validating passwords
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;