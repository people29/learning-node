"use strict";
const clone = require("clone");
const userValidator = require("../../validator/user.validator");

describe("User validator", ()=> {

    describe("validate mandator", ()=> {
        let dataStub = {
            username: "username", firstname: "firstname", lastname: "lastname", countryId: "countryId"
        };

        ["username", "firstname", "lastname", "countryId"].forEach(field => {
            it("should return false if field " + field + " is empty", ()=> {
                let data = clone(dataStub);
                data[field] = undefined;

                let result = userValidator.validate(data);
                expect(result).toEqual(false);
            });
        });

        ["username", "firstname", "lastname", "countryId"].forEach(field => {
           it("should return true if field " + field + " is empty", ()=> {
                let result = userValidator.validate(dataStub);
                expect(result).toEqual(true);
            });
        });
    });

});