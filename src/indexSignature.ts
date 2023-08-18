// Index Signatures
interface TransactionObj {
    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50
}
console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
//console.log(todaysTransactions[prop]) // This gives error

// To resolve above error we have to use index signatures
interface TransactionObj1 {
    [index: string]: number // index can be union but cannot be boolean
}
const todaysNet: TransactionObj1 = {
    Pizza: -10,
    Books: -5,
    Job: 50
}
console.log(todaysNet[prop])
console.log(todaysNet['Chai'])

///////////////////////////////////////////

interface Student {
    //[key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?: number[]
}

const student: Student = {
    name: "Chai",
    GPA: 8.0,
    classes: [100,200]
}

// console.log(student.test)
// keyof Assertion - It creates Union type
for (const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`)
}
// use typeof assertion if u don't know the type of the object
Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`)
}
logStudentKey(student, 'GPA')

////////////////////////////////////////////

// interface Incomes {
//     [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
// Record utility type
type Incomes = Record<Streams, number>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
}
// below doesn't work
// for (const revenue in monthlyIncomes){
//     console.log(monthlyIncomes[revenue])
// }

// when record is udes we have to use keyof compylsorily
for (const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}