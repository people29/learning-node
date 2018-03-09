"use strict";
const express = require("express");
const cors = require("cors");

const app = express();

app.use((err, req, res, next) => {
    res.status(500).send(err.stack ? err.stack : err);
  });

module.exports = app;