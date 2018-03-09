"use strict";
const UserService = require("../services/user.service");

async function caller1() {
    console.log("caller 1 starting..");
    try {
        let users = await UserService.getUsers();
        return users.map(user => {
            console.log("user: ", user.username);
            console.log("name: ", user.firstname.concat(" ", user.lastname));
        });
    } catch(err) {
        console.log(err);
    }
    console.log("end.");
}


function caller2() {
    console.log("caller 2 starting..");
    return UserService.getUsersAutoCommit(false).then(users => {
        return users.map(user => {
            console.log("user: ", user.username);
            console.log("name: ", user.firstname.concat(" ", user.lastname));
        });
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => {
        console.log("end.");
    });
}

caller2();

