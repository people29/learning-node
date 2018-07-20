"use strict";
const Q = require("q");
const userService = require("../services/user.service");

(async () => {
    console.log("--- run sample ---");

    // solution2(3).then(user => {
    //     return nextProcess(user + " > S2");
    // }).catch(err => {
    //     console.log("End process with error!!", err);
    // });
    try {
        await solution1(3);
    } catch (error) {
        console.log("End process with error!!", err);
    }


    console.log("---- End sample ----");
})()

async function solution1(maxRetry) {
    console.log("---- run solution 1");
    for (let i=0; i < maxRetry; i++) {
        try {
            await wait();
            console.log("xxx");
        } catch (error) {
            console.log("end err ", error);
            return Promise.reject(error);
        }
    }
}

function solution2(maxRetry, deferred) {
    console.log("--- run solution 2");
    deferred = deferred || Q.defer();

    getUsers(1).then(user => {
        deferred.resolve(user);
    }).catch(err => {
        if (maxRetry > 1) {
            console.log("try again..");
            setTimeout((resolve, reject) => {
                solution2(maxRetry-1, deferred);
            }, 2000);
        } else {
            console.log("Give up!", maxRetry);
            deferred.reject(err);
        }
    });

    return deferred.promise;
}

function wait() {
    return new Promise((resolve , reject) => {
        setTimeout(async () => {
            try {
                let user = await getUsers(1);
                let c = nextProcess(user + " > S1 ");
                console.log("ccccc ", c);
            } catch (error) {
                console.log("ERR>> ", error);
                resolve(error);
            }
        }, 3000);
    });
}

function getUsers(id) {
    return userService.getUserById(id).then(user => {
        let rand = Math.random();
        console.log(rand);

        if (rand < 0.6) {
            throw "!!" + user.username; //or can use ->
            //return Promise.reject(user.username);
        }
        return Promise.resolve(user.username);
    });
}

function nextProcess(username) {
    console.log("next process...", username);
    return Promise.resolve(username);
}
