"use strict";

const Q = require("q");

run();

function run() {
    return Q.resolve()
    .then(() => {
        // getData().map((data) => {
        //     console.log(data.name);
        // });
        console.log("step 2");
        //return getData();
    })
    .then(() => {
        console.log("step 3");
    });

}

function getData() {
    return [
        {name: "name1", age: 29, sex: "M"},
        {name: "name2", age: 30, sex: "F"},
        {name: "name3", age: 31, sex: "F"},
        {name: "name4", age: 23, sex: "M"},
    ];
}

