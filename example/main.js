const Q = require("q");
const moment = require("moment");
const userService = require("../services/user.service");
const UserDomain = require("../business.domain/user.domain");

(async () => {
    // returnReject().catch(err => { console.log(err); }); // √

    try {
        await throwsError();
    } catch (error) {
        console.log(error);
    } //this ok √

    // throwsError().catch(err => {
    //     console.log(err);
    // }); //this not work x

    try {
        await returnReject();
    } catch (error) {
        console.log(error)
    } //this word √

})();

function returnReject() {
    return Promise.reject("reject function");
}

async function throwsError() {
    let users = await userService.getUsers();
    users.map(user => {
        console.log(user.username);
    });
    throw "throw function";
}

function newClass() {
    let param = {
        username: "jonhDoe",
        firstname: "Jonh",
        lastname: "Doe"
    };
    let user = new UserDomain(param);
    let userPending = user.pending({status:"ACTIVE", updateBy: "admin", updateDate: moment().toDate()});
}

function forEachforInforOf() {
    let listStr = ["a", "b", "c", "d", "e", "f", "g"];
    let listNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let listObj = [{
        a: 1, b: 2, c: 3, c: 4, e: 5, f: 6
    }];

    // listStr.forEach((v, i)=> {
    //     console.log(v +":"+ i); //a:0 b:1 c:2 d:3 e:4 f:5 g:6
    // });

    // for (let i in listStr) {
    //     console.log(i); //0 1 2 3 4 5 6 <- index of value
    // }

    // for (let v of listObj) {
    //     console.log(v); //{ a: 1, b: 2, c: 4, e: 5, f: 6 }
    // }

    // for(let v of listNum) {
    //     console.log(v); //1 2 3 4 5 6 7 8 9 <-value of list data
    // }

    listObj.forEach(v => {
        console.log(v);
    });

}

