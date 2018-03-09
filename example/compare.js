"use strict";
const _ = require("lodash");

let a = {
   "xx": "1234",
   "unitholders": [
       {name: "name2"},
       {name: "name1"},
       {name: {
        year: "123",
        age: 3,
       }}
   ],
   "zz": "5678",
   "yy": "xxxx",
};

let b = {
    "xx": "1234",
    "zz": "5678",
    "yy": "xxxx",
   "unitholders": [
        {name: {
            age: 3,
            year: "123"
        }},
        {name: "name2"},
        {name: "name1"}
   ],
};


(()=> {
    let obj1 = (_.isEqualWith(a, b, _.isMatch));
    //let obj2 = (_.isEqualWith(b, a, _.isMatch));
    console.log(a.unitholders.length);
    let obj2 = (a.unitholders.length === b.unitholders.length);

    console.log(obj1 && obj2);
})()
