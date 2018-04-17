"use strict";

const Q = require("q");

//run();
// stringVal(10);

function run() {
    let orders = [
        {id:10, name:"name1", flag1: false, flag2: true, date1: "2017-11-03T14:30:00.408Z", date2: "2017-10-03T14:30:00.408Z"},
        {id:11, name:"name2", flag1: false, flag2: true, date1: "2017-11-03T14:30:00.408Z", date2: "2017-10-03T14:30:00.408Z"},
        {id:12, name:"name3", flag1: false, flag2: true, date1: "2017-11-03T14:30:00.408Z", date2: "2017-10-03T14:30:00.408Z"}
    ];

    let FLAG_FIELD = ["flag1", "flag2"];

    let xxxx = "flag2";

    let xx = orders.map((order) => {
        // return Object.keys(order).map((key) => {
        //     if(isFlagField(FLAG_FIELD, key)) order[key] = tranformFlag(order[key]);
        //     return order;
        // });
    });

    console.log(FLAG_FIELD.indexOf(xxxx));

}

function isFlagField(FLAG_FIELD, field) {
    return FLAG_FIELD.indexOf(field) !== -1;
}

function tranformFlag(data) {
    return data ? "Y" : "N";
}

function test() {
    let props = ["PASSPORT", "CITIZEN_CARD"];
    let body = { cardType: "PASSPORTx", incomeSource: "RETIREDMENT" };
    let incomeSourceProps = ["SALARY", "SAVING", "RETIREDMENT", "HERITAGE", "INVESTMENT", "BUSINESS", "OTHER"];


    let incomeSources = body.incomeSource.split(",");
    let result = false;
    incomeSources.forEach((incomeSource) => {
        console.log(incomeSource);
        result = incomeSourceProps.some((prop) => {
             return prop === incomeSource.trim();
        });
    });

    let x = incomeSourceProps.some((prop) => {
        return prop === body.incomeSource;
    });

    console.log(">>>",result);
}

function stringVal(val) {
    val = !val ? val : val.trim();
    console.log(val);
}

function x() {
    let obj = {
        name: "xxxx",
        source: "BUSINESS, INVESTMENT"
    };

    mapValue(obj);
    console.log(obj);
}

function mapValue(dataObj) {
    let obj = {
        "SALARY": "Source1",
        "SAVINGS": "Source2",
        "RETIREDMENT": "Source3",
        "HERITAGE": "Source4",
        "INVESTMENT": "Source5",
        "BUSINESS": "Source6",
        "OTHER": "Source7"
    };

    let x;
    dataObj.source.split(",").forEach((source) => {
        source = source.trim();
        if (obj.hasOwnProperty(source)) {
            x = !x ? obj[source] : x+","+obj[source];
        } else {
            x = !x ? source : x+","+source;
        }
    });
    dataObj.source = !x ? source : x ;
}

// name();
function name() {
    let investorIds =  [159863, 163541, 175598, 175604, 176604, 176606, 176611, 176618, 176626, 177014, 177016, 178683];

    investorIds.map((id) => {
        console.log(id);
        req(id);
    });

}

function req(params) {
    console.log(">>>>",params);
    return Q.resolve(params);
}

tranformData();
function tranformData() {
    console.log(">>>>> ");
    let list = [
        {
            name: "1111", lastname: "2222"
        },
        {
            name: "444", lastname: "555"
        }
    ];
    console.log(_transformList(list));
}

function _transformList(list) {
    return list.map(data => {
        return {
            a: data.name,
            b: data.lastname
        };
    });
};