"use strict";
// interface postId = stringOrNumber // cannot be used like this
// Literal Types
let myName; //only possible value is Dave. Cannot assign other values
// myName = 'John' - this is not possible
//Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello Hi');
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default values
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 4)); // output = 9
logMsg(sumAll(1, 2, 3)); // output = 6
logMsg(addAll(2, 3)); // output = 5
logMsg(sumAll(1, 2)); // output = 5
logMsg(sumAll(undefined, 3)); // output = 15 // if undefined is not passed 3 is assigned to a and creates error
// Rest Parameters
const total = (a, ...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2, 3, 4)); // output = 10 // a = 1, nums = [2,3,4]
// never return type
