"use strict";
const express = require("express");

module.exports = (app) => {
    let router = express.Router();
    app.use("/api", router);

    router.get("/", home);
}

function home(req, res) {
    res.send("welcome home");
}

