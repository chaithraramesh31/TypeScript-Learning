"use strict";
// redundancy
class Coder {
    constructor(name, music, age, lang) {
        this.name = name;
        this.mucic = music;
        this.age = age;
        this.lang = lang;
    }
}
// dry using visibility/data/access modifiers
class Coder1 {
    constructor(name, music, age, lang = 'TypeScript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
const Dave = new Coder1('Dave', 'Rock', 42, 'TypeScript');
const Dave1 = new Coder1('Dave', 'Rock', 42);
console.log(Dave.getAge());
class webDev extends Coder1 {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return this.lang;
    }
}
const Sara = new webDev('Mac', 'Sara', 'Lofi', 26);
console.log(Sara.getLang());
class Guitarist4 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist4('Jimmy', 'guitar');
console.log(Page.play('strums'));
///////////////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
/////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['abc', 'def'];
console.log(myBands.data);
myBands.data = [...myBands.data, 'ghi'];
console.log(myBands.data);
