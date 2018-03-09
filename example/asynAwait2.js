"use strict";
const Q = require("q");

console.log("before start function.");

function resolveAfter2Seconds(val) {
    return new Promise(resolve => {
        setTimeout(() => {
        resolve(val);
        }, 2000);
    });
}

function rejectAfter2Seconds(val) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(val);
        }, 2000);
    });
}

function Qresolve(val) {
    return Q.resolve(val);
}

async function runWithAsync() {
    console.log("starting run with async..");
    try {
        let val1 = await resolveAfter2Seconds(10);
        let val2 = await Qresolve(20);
        console.log("summary: ", val1 + val2);
        let val3 = await rejectAfter2Seconds(100);
    } catch (error) {
        console.log("catch >>", error);
    } finally {
        console.log("finally");
    }
    console.log("end.");
}

function runPromieWithThen() {
    console.log("starting run promise with then..");
    resolveAfter2Seconds(10)
        .then((val1) => {
            return Qresolve(20).then((val2) => {
                console.log("summary: ", val1 + val2);
                return Q.resolve();
            });
        })
        .then(() => {
            return rejectAfter2Seconds("reject..");
        })
        .then(()=> {
            console.log("end.");
        }).catch(err => {
            console.log("error: ", err);
        });
}

runWithAsync().then(() => {
    console.log("end after runWithAsync");
});