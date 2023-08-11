"use strict";
//Arrays - position doest matter
let strArray = ['one', 'two', 'three']; // string type - can't push types other than string
let id = ['12', '34', 56]; // (string | number)[] - union array - cant push boolean 
let mixedData = ['12', true, 3]; // (string | boolean | number)[] - union array - can push all 3 types
// strArray = id | strArray = mixedData - is not possible
id = strArray; // possible
// id = mixedData - not possible
mixedData = strArray;
mixedData = id;
let test = []; // by default any data type
test[0] = 3;
test[1] = 'dave';
test[2] = true;
//Tuple
let myTuple;
myTuple = ['chai', 54, false];
// not possible at add just sttring or number or boolean. It has to have all declared data types in order.
// myTuple = ['far'] | myTuple = [65] | myTuple = [true] - not possible
// myTuple = [32,'chai',false] - data position is important
// myTuple[4] = 42 - it should have only declared no of data - in this case 3 not more or less
//Objects
let myObj;
let exObj = {
    name: 'Chai',
    marks: 42
};
let evh = {
    // name: 'Dave',
    active: false,
    albums: ['seven', 7]
};
let jp = {
    name: 'Jimmie',
    // active: true,
    albums: ['My time', 5]
};
const greet = (guitarist) => {
    var _a;
    return `Hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`; // if ? is included in type declaration, then it should 
    //also be included inside function when calling methods because, if not included it indicates that it may be undefined
};
// Or
const greet1 = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
    else
        return 'Hello!';
};
console.log(greet1(evh));
// Enums
// Unlike most TS features, Enums are not a type-level addition to JS but something added to language and runtime
var Grade;
(function (Grade) {
    Grade[Grade["D"] = 0] = "D";
    Grade[Grade["C"] = 1] = "C";
    Grade[Grade["B"] = 2] = "B";
    Grade[Grade["A"] = 3] = "A";
})(Grade || (Grade = {}));
console.log(Grade.D); // gives output as 0
console.log(Grade.A); // gives output as 3
var Grade1;
(function (Grade1) {
    Grade1[Grade1["D"] = 1] = "D";
    Grade1[Grade1["C"] = 2] = "C";
    Grade1[Grade1["B"] = 3] = "B";
    Grade1[Grade1["A"] = 4] = "A";
})(Grade1 || (Grade1 = {}));
console.log(Grade1.D); // gives output as 1
console.log(Grade1.A); // gives output as 4
