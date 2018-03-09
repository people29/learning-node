"use strict";
/** practices for clean code compare to good and bad code
 * valiable
 * https://github.com/ryanmcdermott/clean-code-javascript#introduction
*/

const moment = require("moment");

/** Valiables */
class Valiables {
    constructor() {
        console.log("Valiables-> ");
    }

    bad() {
        console.log("bad:-> const yyyymmdstr = moment().format('YYYY/MM/DD');");
        const yyyymmdstr = moment().format('YYYY/MM/DD');
    };

    good() {
        console.log("good:-> const currentDate = moment().format('YYYY/MM/DD');");
        const currentDate = moment().format('YYYY/MM/DD');
    };

}

module.exports = Valiables;