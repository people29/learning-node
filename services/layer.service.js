"use strict";

const lodash = require("lodash");

function tranformField2Model(fieldsData) {

}

let configs = [
    {
        dataOf: "investor",
        name: "cardNo",
        level: 0,
        type: "string",
        field: "cardNo"
    },
    {
        dataOf: "investor",
        name: "children",
        level: 1,
        type: "array",
        field: [{
            name: "firstname",
            type: "string"
        }, /* {
            name: "passportCountryEngName",
            type: "string"
        } */ {
            name: "passportCountry",
            type: "object",
            field: [{
                name: "engName",
                type: "string"
            }, {
                name: "thaiName",
                type: "string"
            }]
        }]
    },
    {
        dataOf: "investor",
        name: "businessType",
        level: 1,
        type: "object",
        field: [{
            name: "engName",
            type: "string"
        }]
    }
 ];

console.log(isChange(oldData(), newData()));
// console.log(transformData(oldData()));

function transformData(data) {
    data.children = data.children.map( each => {

        if (each.passportCountry) {
            each.passportCountryEngName = each.passportCountry.engName
            each.passportCountryThaiName = each.passportCountry.thaiName
            each.passportCountryCode = each.passportCountry.code
        }
        return each;
    });

    return data;
}

function oldData() {
    return {
        cardNo: "1111111111119",
        children: [
            {
                firstname: "child_1",
                lastname: "lastname_1",
                passportCountry: {
                    code: "AD",
                    engName: "Andorra",
                    id: 251,
                    thaiName: "Andorra2"
                }
            },
            { firstname: "child_2", lastname: "lastname_2" }

        ],
        businessType: {
            id: 20, engName: "Antique Trading"
        }
    }
}

function newData() {
    return {
        cardNo: "1111111111119",
        children: [
            { firstname: "child_2", lastname: "lastname_2" },

            { firstname: "child_1", lastname: "lastname_1" ,
            passportCountry: {
                code: "AD",
                engName: "Andorra",
                id: 251,
                thaiName: "Andorra"
            }},
        ],
        businessType: {
            id: 20, engName: "Antique Trading"
        }
    }
}

function isChange(oldData, newData) {
    oldData = transformData(oldData);
    newData = transformData(newData);
    let isChange = false;
    for (let config of configs) {

        if (config.type === "array") {
            isChange = isArrayDiff(oldData[config.name], newData[config.name], config)
        } else if (config.type === "object") {
            isChange = isObjectDiff(oldData[config.name], newData[config.name], config)
        }
        else if (oldData[config.name] !== newData[config.name]) {
            //console.log(oldData[config.name], " :::: " ,newData[config.name]);
            isChange = true;
        }
        if (isChange) {
            return true;
        }
    }


}

function isDiff(oldData, newData, config) {
    let isChange = false;
    console.log("newData", newData);
    if (config.type === "array") {
        isChange = isArrayDiff(oldData[config.name], newData[config.name], config)
    } else if (config.type === "object") {
        isChange = isObjectDiff(oldData, newData, config)
    }
    else if (oldData[config.name] !== newData[config.name]) {
        //console.log(oldData[config.name], " :::: " ,newData[config.name]);
        isChange = true;
    }
    if (isChange) {
        return true;
    }
    return isChange;
}

function isObjectDiff(oldData={}, newData={}, config) {
    for(let field of config.field) {
        if (oldData[field.name] !== newData[field.name]) {
            return true;
        }
    }

}

function isArrayDiff(p1=[], p2=[], config) {

    p1 = lodash.sortBy(p1, config.field.map(each => {return each.name}),['asc']);
    p2 = lodash.sortBy(p2, config.field.map(each => {return each.name}),['asc']);

    let isChange = false;
    for (let index=0; index < p1.length; index++) {
        console.log("YYYY", config.field);
        for(let field of config.field) {
            if(field.type === "object") {
                isChange =  isDiff(p1[index][field.name], p2[index][field.name], field);
            }
            else if (p1[index][field.name] !== p2[index][field.name]) {

                isChange = true;
            }
            if(isChange) {
                return isChange;
            }
        }

    }

}




