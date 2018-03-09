"use strict";

const Valiables = require("./_valiables");
const Arguments = require("./_argument");

// _valiables();
function _valiables() {
    let valiables = new Valiables();
    valiables.bad();
    valiables.good();
}

_argument();
function _argument() {
    let arg = new Arguments();
    arg.bad("bad: parameter pass by main");
    arg.good("good: parameter pass by main\n");

    arg.bad();
    arg.good();
}

