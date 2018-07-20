"use strict";
const Q = require("q");
const UserService = require("./user.service");

function getName() {
    return "learning javascript (sync)";
}

async function getNameAsync() {
    return Promise.resolve("learning javascript (async)");
}

module.exports = {
    getName: getName,
    getNameAsync: getNameAsync
}