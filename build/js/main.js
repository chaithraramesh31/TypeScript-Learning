"use strict";
// TypeScript is a strongly / statically typed language. This means types are checked at compile time
// In JS types are checked at run time. It is dynamically typed language.
let myName1 = 'Dave'; // Implicitly
let myName2 = 'Dave'; // Explicitly
//Basic types
let num = 42; // number
let str = 'Chai'; //string
let bool = true; //boolean
// any type - could be of any type
let album;
album = 23;
album = 'giri';
album = true;
// when ts can't figure out exactly what type you may want there, it gonna assign any type
// const sum = (a, b) => {
//     return a + b
// }
const sum = (a, b) => {
    return a + b;
};
//Union type
let uni; // It can only be string or number. cannot be boolean
// RegExp type. (Regular Expression)
let re = /\w+/g;
