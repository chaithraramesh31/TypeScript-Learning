"use strict";
// convert to more or less specific
let a = 'Hello';
let b = a; // less specific
let c = a; // more specific
// Or us angular braces
let d = 'world'; // this way doesnt work in tsx files in react
// use case of assertion
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
// let myVal: string = addOrConcat(2,2,'concat') - gives error as string|number is not assignable to string
let myVal = addOrConcat(2, 2, 'concat'); // return type - string
let myVal1 = addOrConcat(2, 2, 'add'); // return type - number
//Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//Force casting or double casting using unknown type - not recommendable
// 10 as string gives error
10;
//The DOM
// const img = document.querySelector('img') // return type - HTMLImageElement | null
// const myImg = document.getElementById('img') // return type - HTMLElemt | null
const img = document.querySelector('img'); // 
img.src;
// myImg.src - Property 'src' does not exist on type 'HTMLElement'.
const myImg = document.getElementById('img');
myImg.src;
// not null assertion
const img1 = document.querySelector('img'); // return type - HTMLImageElement
