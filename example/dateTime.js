"use strict";
const moment = require('moment');
const bunyan = require('bunyan');
const strftime = require('strftime');
const uuidV4 = require('uuid/v4');

const log = require("../config/logger");

//run();

function run() {
    let env = "production";
    let obj = [{
        level: env === 'test' || 'development' || 'qa' ? 'debug' : 'info'
    }];

    console.log("::>>>>> ",obj[0].level);

    log.debug("TEST LOGGER...>> DEBUG >>");
    log.info("TEST LOGER...>> INFO >>");
}


dateFormat();
function dateFormat() {
    //console.log(moment());
    console.log(moment());
    console.log(moment("2017-12-31 23:59:59", "YYYY-MM-DD HH:mm:ss"));
}

//dateCurrent("YYYY/MM/DD HH:mm");
function dateCurrent(format = "YYYY/MM/DD") {
    console.log(moment().format(format));
}