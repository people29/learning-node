"use strict";

module.exports = (sequelize, DataTypes)=> {
    let user = sequelize.define("users", {
        username: {
            type: DataTypes.STRING,
            field: "username"
        },
        firstname: {
            type: DataTypes.STRING,
            field: "firstname"
        },
        lastname: {
            type: DataTypes.STRING,
            field: "lastname"
        },
        phoneNo: {
            type: DataTypes.STRING,
            field: "phone_no"
        },
        address: {
            type: DataTypes.STRING,
            field: "address"
        }
    },{
        timestamps: false,
        tableName: "users"
    });

    return user;
}