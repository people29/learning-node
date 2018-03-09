"use strict";
const sequelize = require("../config").sequelize;
const Users = sequelize.import("../models/user");

function getUsers() {
    return Users.findAll();
}

function getUsersWihtAutocommit(autocommit=true) {
    return sequelize.transaction({
        isolationLevel: sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED,
        autocommit: autocommit,
    },(t)=> {
        return Users.findAll({transaction: t});
    });
}

module.exports = {
    getUsers: getUsers,
    getUsersAutoCommit: getUsersWihtAutocommit
}