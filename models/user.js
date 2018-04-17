"use strict";

module.exports = (sequelize, DataTypes)=> {
    const Country = sequelize.import("country");

    let User = sequelize.define("users", {
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
        },
        countryId: {
            type: DataTypes.INTEGER,
            field: "country_id"
        }
    },{
        timestamps: false,
        tableName: "users",
        getterMethods: {

        },
        setterMethods: {
            country: function (json) {
                this.setDataValue("countryId", json.id);
            }
        }
    });

    User.belongsTo(Country, {
        foreignKey: "countryId"
    });

    return User;
}