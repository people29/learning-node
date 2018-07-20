"use strict";
const Sequelize = require("sequelize");

module.exports = {
    "sequelize": new Sequelize('testdb', 'root', 'rootpass', {
        logging: false,
        host: '127.0.0.1',
        port: 3307,
        dialect: 'mysql',
        timezone: "+07:00",
        pool: {
            max: 5,
            min: 0,
            idle: 2000
        }
    })
};





