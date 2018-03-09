"use strict";

const Q = require("q");

run();

function run() {
    console.log(">>>>>[[start]]<<<<<");
    getPromiseData()
        .then((data) => {
            console.log("step 1");
            return nextProcess("parameter")(data);
        })
        .then((data) => {
            console.log("step 2");
            console.log(data);
        })
        .then(() => {
            console.log(">>>>>[[end]]<<<<<");
        });
}

function nextProcess(paramObj) {
    return (value) => {
        console.log("value: ",value);
        value.param = paramObj;
        return value;
    };
}

function getPromiseData() {
    return Q.resolve({
        name: "username",
        lastname: "lastname",
        age: 20,
        phone: "08341234484"
    });
}

function formatNumberFixedDecimalPoint(number, decimalPoint) {
    return Number(number).toFixed(decimalPoint).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}