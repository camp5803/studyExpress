const { DataTypes, INTEGER, STRING } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    sequelize.define(
        'user',
        {
            id:{
                type: DataTypes.INTEGER(11),
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            email: {
                type: DataTypes.STRING(20),
                allowNull: false,
                unique: true,
            },
            passwd: {
                type: DataTypes.STRING(32),
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
                unique: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: CURRENT_TIMESTAMP,
            },
            sex: {
                type: DataTypes.STRING(6),
                allowNull: false,
            },
            age: {
                type: DataTypes.BOOLEAN,UNSIGNED,
                allowNull: false
            },
            phonenum: {
                type: DataTypes.STRING(13),
                allowNull: false,
            },
            birth: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        },
        {
            timestamp: true,
        },
    );
}