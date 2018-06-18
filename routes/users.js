"use strict";
const express = require("express");
const UserDonmain = require("../business.domain/user.domain")
const UserService = require("../services/user.service");

module.exports = (app) => {
    let router = express.Router();
    app.use("/api/user", router);

    router.get("/", getUsers)
    router.get("/:id", getUserById);
    router.post("/", createUser)
}

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

function createUser(req, res, next) {
    let reqBody = req.body;
    let user = new UserDonmain(reqBody);
    UserService.create(user).then((result) => {
        res.status(200).send(result);
        next();
    }).catch(err => {
        res.send(400).send(err);
        next();
    });
}
