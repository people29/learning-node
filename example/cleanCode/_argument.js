"use strict";

/** Use default arguments instead of short circuiting or conditionals
 */

 class Arguments {
    constructor() {
        console.log("run argument");
    };

    bad(params) {
        let defaultVal = params || "Bad:-> This is defualt value";
        console.log(defaultVal);
    };

    good(params = "Good:-> This is defualf value") {
        console.log(params);
    };

 }

 module.exports = Arguments;