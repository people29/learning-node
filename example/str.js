"use strict";
const moment = require("moment");

setObject();

function run() {
    let number = "xxxx";
    console.log(">>>>> ", number);

    let isnum = /^\d+$/.test(number.trim());

    if(true) {
        let x = moment(number, "YYYYMMDD");
        if(x.isValid()) {
            console.log("validate", x);
        }

    }
}

function setObject() {
    let obj = {
        name: "firstname",
        lastname: "lastname",
    };
    console.log("1.>>>> ",obj);

    obj.phone = "098234782347";

    console.log("2.>>>> ",obj);
}