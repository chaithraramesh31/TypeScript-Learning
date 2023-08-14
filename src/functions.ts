// Type Aliases
type stringOrNumber = string | number
type stringOrNumberArray = (string | number)[]
type Guitarist3 = {
    name: string,
    active?: boolean, // ? indicates it can be optional
    albums: stringOrNumberArray
}
type userId = stringOrNumber

// interface postId = stringOrNumber // cannot be used like this

// Literal Types
let myName: 'Dave' //only possible value is Dave. Cannot assign other values
// myName = 'John' - this is not possible

//Functions
const add = (a: number, b: number): number => { // return type is number
    return a + b
}

const logMsg = (message: any): void => { // return type is void
    console.log(message)
}

logMsg('Hello Hi')
logMsg(add(2,3))

let subtract = function (c: number, d: number): number {
    return c - d
}

// Function definition
type mathFunction = (a: number, b: number) => number // default values doesnt work here
//or
interface mathFunction1 {
    (a: number, b: number): number
}
let multiply: mathFunction = function (c, d) {
    return c * d
}

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if(typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}

// default values
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}
logMsg(addAll(2,3,4)) // output = 9
logMsg(sumAll(1,2,3)) // output = 6
logMsg(addAll(2,3)) // output = 5
logMsg(sumAll(1,2)) // output = 5
logMsg(sumAll(undefined,3)) // output = 15 // if undefined is not passed 3 is assigned to a and creates error

// Rest Parameters
const total = (a: number, ...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}
logMsg(total(1,2,3,4)) // output = 10 // a = 1, nums = [2,3,4]

// never return type