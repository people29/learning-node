"use strict";

class User {
    constructor({
        username, firstname, lastname, phoneNo, address, countryId,
    }) {
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.phoneNo = phoneNo;
        this.address = address;
        this.countryId = countryId;
    }
}

module.exports = User;