"use strict";

function validate(userData) {
    let mandatoryFields = ["username", "firstname", "lastname", "countryId"];

    for (let field of mandatoryFields) {
        let validate = mandatory(userData, field);
        if (!validate) return false;
    };
    return true;
};

function mandatory(dataObj, fieldname) {
    if (!dataObj || !dataObj.hasOwnProperty(fieldname)) return false;
    if (dataObj[fieldname] === null || dataObj[fieldname] === undefined || dataObj[fieldname] === "") return false;
    return true;
}

module.exports = {
    validate: validate
};