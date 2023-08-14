// redundancy
class Coder {
    name: string // property is mandatory
    mucic: string
    age: number
    lang: string
    constructor(name: string, music: string, age: number, lang: string)
    { // in TS constructor is mandatory
        this.name = name
        this.mucic = music
        this.age = age
        this.lang = lang
    }
}

// dry using visibility/data/access modifiers
class Coder1 {
    secondLang!: string // this is not recommendable for beginners
    constructor(
        public readonly name: string, 
        public music: string, 
        private age: number, 
        protected lang: string = 'TypeScript')
    {
        this.name = name
        this.music = music
        this.age = age
        this.lang = lang
    }
    public getAge() {
        return this.age
    }
}

const Dave = new Coder1('Dave','Rock',42,'TypeScript')
const Dave1 = new Coder1('Dave','Rock',42)
console.log(Dave.getAge())

class webDev extends Coder1 {
    constructor(
        public computer: string,
        name: string, 
        music: string, 
        age: number,
    ){
        super(name, music, age)
        this.computer = computer
    }
    public getLang() {
        return this.lang
    }
}

const Sara = new webDev('Mac', 'Sara', 'Lofi', 26)
console.log(Sara.getLang())
// console.log(Sara.lang) - not works
//////////////////////////////////////////////

//Interface
interface Musician {
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist4 implements Musician{
    name: string
    instrument: string
    constructor(name: string, instrument: string){
        this.name = name
        this.instrument = instrument
    }
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}

const Page = new Guitarist4('Jimmy', 'guitar')
console.log(Page.play('strums'))
///////////////////////////////////////////////

class Peeps {
    static count: number = 0

    static getCount(): number {
        return Peeps.count
    }
    public id: number
    constructor(public name: string){
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')
console.log(Peeps.count)
/////////////////////////////////////////

class Bands {
    private dataState: string[]
    constructor(){
        this.dataState = []
    }
    public get data(): string[] {
        return this.dataState
    }
    public set data(value: string[]) {
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
        }else throw new Error('Param is not an array of strings')
    }
}

const myBands = new Bands();
myBands.data = ['abc','def']
console.log(myBands.data)
myBands.data = [...myBands.data, 'ghi']
console.log(myBands.data)