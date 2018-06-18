"use strict";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//include routes
const index = require("./routes");
const user = require("./routes/users");


const app = express();
app.use(cors({
  exposedHeaders: ["Content-disposition"]
}));

// ##### JSON Body Configuration ##### //
app.use(bodyParser.json({ limit: "1024kb" }));
app.use(bodyParser.urlencoded({ extended: false }));

// ##### STATIC ROUTE ##### //
app.use("/api/static", express.static("resources"));

// ##### PUBLIC ROUTE ##### //
index(app);
user(app);


app.use((err, req, res, next) => {
    res.status(500).send(err.stack ? err.stack : err);
  });

module.exports = app;