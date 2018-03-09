"use strict";
const _ = require("lodash");

run();

function run() {
    let arr = [
        { orderType: "SUB", paymentType: "ATS_AMC", saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM01", amcBankCode: "SCB", amcBankAccount: "100012" },
        { orderType: "SUB", paymentType: "ATS_SA",  saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM03", amcBankCode: "SCB", amcBankAccount: "100011" },
        { orderType: "RED", paymentType: "TRN_SA",  saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM04", amcBankCode: "SCB", amcBankAccount: "100013" },
        { orderType: "RED", paymentType: "ATS_AMC", saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM02", amcBankCode: "SCB", amcBankAccount: "100022" },
        { orderType: "RED", paymentType: "TRN_AMC", saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM05", amcBankCode: "SCB", amcBankAccount: "100042" },
        { orderType: "SUB", paymentType: "ATS_SA",  saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM01", amcBankCode: "SCB", amcBankAccount: "100015" },
        { orderType: "RED", paymentType: "ATS_SA",  saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM02", amcBankCode: "SCB", amcBankAccount: "100018" },
        { orderType: "SUB", paymentType: "ATS_AMC", saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM03", amcBankCode: "SCB", amcBankAccount: "100017" },
        { orderType: "RED", paymentType: "TRN_AMC", saCode: "SA01", saBankCode: "BBL", saBankBranch: "001", saBankAccount: "000001" , amcCode: "AM05", amcBankCode: "SCB", amcBankAccount: "100016" }
    ];

    let sort = _.orderBy(arr, ["orderType", "Type"], ["asc", "asc"]);

    console.log(sort);
}







