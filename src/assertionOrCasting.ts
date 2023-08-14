type One = string
type Two = string | number
type Three = 'Hello'

// convert to more or less specific
let a: One = 'Hello'
let b = a as Two // less specific
let c = a as Three // more specific
// Or us angular braces
let d = <One>'world' // this way doesnt work in tsx files in react

// use case of assertion
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if(c === 'add') return a + b
    return '' + a + b
}
// let myVal: string = addOrConcat(2,2,'concat') - gives error as string|number is not assignable to string
let myVal: string = addOrConcat(2,2,'concat') as string // return type - string
let myVal1: number = addOrConcat(2,2,'add') as number // return type - number
//Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2,2,'concat') as number

//Force casting or double casting using unknown type - not recommendable
// 10 as string gives error
(10 as unknown) as string

//The DOM
// const img = document.querySelector('img') // return type - HTMLImageElement | null
// const myImg = document.getElementById('img') // return type - HTMLElemt | null

const img = document.querySelector('img') as HTMLImageElement // 
img.src
// myImg.src - Property 'src' does not exist on type 'HTMLElement'.
const myImg = document.getElementById('img') as HTMLImageElement
myImg.src

// not null assertion
const img1 = document.querySelector('img')! // return type - HTMLImageElement