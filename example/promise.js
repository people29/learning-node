"use strict";
const Q = require("q");

const CONFIG = {
    "CONFIG1": "Configuration1",
    "CONFIG2": "Configuration2"
};

function run() {
    return Q.resolve()
    .then((res) => {
        console.log(res);
    })
    .then(() => {
        console.log("end");
    });
}

parese();
function parese() {
    let account = {
        unitholders: [
            {id: 100}, {id: 200}
        ]
    };

    let obj = account.unitholders.map(uh => {
        return { unitholderId: uh.id };
    });

    console.log(CONFIG.CONFIG1);

    console.log(obj);
}