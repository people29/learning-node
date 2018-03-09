"use strict";
const Q = require("q");

function getName() {
    return "learning javascript (sync)";
}

function getNameAsync() {
    return Q.resolve("learning javascript (async)");
}

module.exports = {
    getName: getName,
    getNameAsync: getNameAsync
}