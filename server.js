"use strict";
const app = require("./app");
const port = process.env.PORT || 9091;

app.set("port", port);

let server = app.listen(port, () => {
    console.log('API is started on port ' + port);
});

server.timeout = 300000; //5min