"strict";

import "./lib"

run();
function run(params) {
    let name = lib.name();
    console.log(name)
}


function getClassName() {
    return "ServiceOne";

}

module.exports = {
    getClassName: getClassName
}