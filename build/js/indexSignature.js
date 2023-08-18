"use strict";
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
const todaysNet = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysNet[prop]);
console.log(todaysNet['Chai']);
const student = {
    name: "Chai",
    GPA: 8.0,
    classes: [100, 200]
};
// console.log(student.test)
// keyof Assertion - It creates Union type
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// use typeof assertion if u don't know the type of the object
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
// below doesn't work
// for (const revenue in monthlyIncomes){
//     console.log(monthlyIncomes[revenue])
// }
// when record is udes we have to use keyof compylsorily
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
