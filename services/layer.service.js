"use strict";
const lodash = require("lodash");

let fieldsTab1 = ["cardNo", "fristname", "lastname", "phone", "email", "children[]"];

function dataTab1() {
    return {
        cardNo: "1111111111119",
        firstname: "firstname",
        lastname: "lastname",
        phone: "08923489234",
        children: [
            {
                cardNo: "AA001234",
                firstname: "childname",
                lastname: "lastname",
                passportCountry: {
                    code: "TH",
                    engName: "Thailand",
                    id: 66,
                    thaiName: "Thailand"
                }
            },
        ]
    }
}

function tranform(data={}, fields=[]) {

}

