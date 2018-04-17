"use strict";

module.exports = function (sequelize, DataTypes) {
    return sequelize.define("country", {
        code: {
            type: DataTypes.STRING,
            field: "code"
        },
        thaiName: {
            type: DataTypes.STRING,
            field: "thai_name"
        },
        engName: {
            type: DataTypes.STRING,
            field: "eng_name"
        }
    }, {
            timestamps: false,
            tableName: "country"
    });
};