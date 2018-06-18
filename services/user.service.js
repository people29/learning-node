"use strict";
const sequelize = require("../config").sequelize;
const User = sequelize.import("../models/user");
const Country = sequelize.import("../models/country");

function getUsers() {
    return User.findAll({
        include: [{
            model: Country
        }]
    });
}

function getUserById(id) {
    if(!id) return;
    return User.findOne({
        include: [{
            model: Country
        }],
        where: { id: id}
    });
}

function getUsersWihtAutocommit(autocommit=true) {
    return sequelize.transaction({
        isolationLevel: sequelize.Transaction.ISOLATION_LEVELS.READ_COMMITTED,
        autocommit: autocommit,
    },(t)=> {
        return User.findAll({transaction: t});
    });
}

function create(user) {
    return User.create(user);
}

module.exports = {
    getUsers: getUsers,
    getUsersAutoCommit: getUsersWihtAutocommit,
    getUserById: getUserById,
    create: create
}