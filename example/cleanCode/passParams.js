"use strict";

(() => {
    let data = {
        name: "surasak",
        lastname: "khammuangsri",
        phone: "039324324",
        age: 28,
        address: "222/290 Bangkok Thailand"
    };
    let fullname = getFullName(data);
    console.log(fullname);
})();

function getFullName({ name="xx", lastname="cc" }) {
    return name.toUpperCase().concat(" " ,lastname.toUpperCase());
}