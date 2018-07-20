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
        initNullValue(this);
    }

    pending({status, updateDate, updateBy}) {
        let self = require("LODASH").cloneDeep(this);
        self.status = status;
        self.updateDate = updateDate;
        self.updateBy = updateBy;
        initNullValue(self);
        return self;
    }
}

function initNullValue(_this) {
    let self = _this;
    Object.keys(self).forEach(key => {
        self[key]=(self[key])?(self[key]):null;
    });
}

module.exports = User;