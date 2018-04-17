"use strict";
const express = require("express");

module.exports = (app) => {
    let router = express.Router();
    app.use("/api", router);

    router.get("/", home);
    router.get("/users", getUsers)
    router.get("/user/:id", getUserById);

}

function home(req, res) {
    res.send("welcome home");
}


const UserService = require("../services/user.service");
function getUsers(req, res) {
    UserService.getUsers().then(users => {
        res.send(users);
    });
}

function getUserById(req, res) {
    let id = req.params.id;
    UserService.getUserById(id).then(user => {
        console.log(user.country);
        res.send(user);
    });
}
