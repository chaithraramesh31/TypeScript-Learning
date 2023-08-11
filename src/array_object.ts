//Arrays - position doest matter

let strArray:string[] = ['one','two','three'] // string type - can't push types other than string
let id: (string | number)[] = ['12','34',56] // (string | number)[] - union array - cant push boolean 
let mixedData: (string | number | boolean)[] = ['12',true,3] // (string | boolean | number)[] - union array - can push all 3 types

// strArray = id | strArray = mixedData - is not possible
id = strArray // possible
// id = mixedData - not possible
mixedData = strArray
mixedData = id

let test = [] // by default any data type
test[0] = 3
test[1] = 'dave'
test[2] = true


//Tuple
let myTuple: [string, number, boolean];
myTuple = ['chai',54,false]
// not possible at add just sttring or number or boolean. It has to have all declared data types in order.
// myTuple = ['far'] | myTuple = [65] | myTuple = [true] - not possible
// myTuple = [32,'chai',false] - data position is important
// myTuple[4] = 42 - it should have only declared no of data - in this case 3 not more or less


//Objects
let myObj: object;
let exObj = { // It is now string and number. 
    name: 'Chai',
    marks: 42
}
// exObj.name = true - not possible as data type doesnt match

// custom type
type Guitarist = {
    name?: string,
    active?: boolean, // ? indicates it can be optional
    albums: (string | number)[]
}
// or 
interface Guitarist2 {
    name: string,
    active?: boolean, // ? indicates it can be optional
    albums: (string | number)[]
}

let evh: Guitarist = { // should include all properties declared
    // name: 'Dave',
    active: false,
    albums: ['seven', 7]
}
let jp: Guitarist = { // if ? is included in type decalaration, respective property is optional
    name: 'Jimmie',
    // active: true,
    albums: ['My time', 5]
}

const greet = (guitarist: Guitarist) => { // function type - string
    return `Hello ${guitarist.name?.toUpperCase()}` // if ? is included in type declaration, then it should 
    //also be included inside function when calling methods because, if not included it indicates that it may be undefined
}
// Or
const greet1 = (guitarist: Guitarist) => { // function type - (string | undefined)
    if(guitarist.name){
        return `Hello ${guitarist.name.toUpperCase()}`
    }
    else return 'Hello!'
}
console.log(greet1(evh));


// Enums
// Unlike most TS features, Enums are not a type-level addition to JS but something added to language and runtime
enum Grade {
    D,
    C,
    B,
    A
}
console.log(Grade.D) // gives output as 0
console.log(Grade.A) // gives output as 3
enum Grade1 {
    D = 1,
    C,
    B,
    A
}
console.log(Grade1.D) // gives output as 1
console.log(Grade1.A) // gives output as 4