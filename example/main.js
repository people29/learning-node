const UserDomain = require("../business.domain/user.domain");

(async () => {
    forEachforInforOf();


})();

function calLevel(score, rule) {
    let min = rule.min;
    let max = rule.max;
    console.log(min, max);
    return (min < score < max);
}

function newClass() {
    let param = {
        username: "jonhDoe",
        firstname: "Jonh",
        lastname: "Doe"
    };
    let user = new UserDomain(param);

    console.log("user domain: ");

    Object.keys(user).forEach(key => {
        console.log(key);
    });
}

function client({account, id}) {
    account.map(n => {
        console.log(n);
    });
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

    for(let v of listNum) {
        console.log(v); //1 2 3 4 5 6 7 8 9 <-value of list data
    }

}