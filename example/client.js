"use strict";

class User {
    constructor({name="", lastname=""}) {
        this.name = name;
        this.lastname = lastname;
    }

    getFullname() {
        return this.name.concat(" ", this.lastname);
    }
}

module.exports = User;