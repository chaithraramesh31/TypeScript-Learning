// TypeScript is a strongly / statically typed language. This means types are checked at compile time
// In JS types are checked at run time. It is dynamically typed language.

let myName1 = 'Dave' // Implicitly
let myName2: string = 'Dave' // Explicitly

//Basic types
let num: number = 42 // number
let str: string = 'Chai' //string
let bool: boolean = true //boolean

// any type - could be of any type
let album: any;
album = 23
album = 'giri'
album = true

// when ts can't figure out exactly what type you may want there, it gonna assign any type
// const sum = (a, b) => {
//     return a + b
// }
const sum = (a: number, b: number) => {
    return a + b
}

//Union type
let uni: string | number; // It can only be string or number. cannot be boolean

// RegExp type. (Regular Expression)
let re = /\w+/g