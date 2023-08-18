// Utility types

// Partial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate}
}
const assign1: Assignment = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0
}
console.log(updateAssignment(assign1, {grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1, {grade: 95})


// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}
const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}
//assignVerified.grade = 88 // this doesnt work as it is read only
//recordAssignment(assignGraded) // this doesnt work as every properties are required
recordAssignment({ ...assignGraded, verified: true})

// Record type
const hexColorMap: Record<string, string> = {
    red: 'FF0000',
    green: '00FF00',
    blue: '0000FF'
}

type Students = 'Sara' | 'Kelly'
type LetterGrades = 'A' | 'B' | 'C' | 'D' | 'U'
const finalGrades: Record<Students, LetterGrades> = {
    Sara: 'B',
    Kelly: 'U'
}

interface Grades {
    assign1: number,
    assign2: number
}
const gradeData: Record<Students, Grades> = {
    Sara: {assign1: 85, assign2: 96},
    Kelly: {assign1: 76, assign2: 15}
}


// Pick and omit
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>
const score: AssignResult = {
    studentId: 'k123',
    grade: 85
}

type AssignPreview = Omit<Assignment, 'grade' | 'verified'>
const preview: AssignPreview = {
    studentId: 'k123',
    title: "Final",
}


// Exclude and Extract - doesnt work with interface
type adjustedGrade = Exclude<LetterGrades, 'U'> // type adjustedGrade = "A" | "B" | "C" | "D"
type highGrades = Extract<LetterGrades, 'A' | 'B'> // type highGrades = "A" | "B"

// Non-nullable
type AllPossibleGrades = 'Dave' | 'John' | null | undefined //type AllPossibleGrades = "Dave" | "John" | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades> //type NamesOnly = "Dave" | "John"


// Return type
// type newAssign = {title: string, points: number}
const createNewAssign = (title: string, points: number) => {
    return {title, points}
}
type newAssign = ReturnType<typeof createNewAssign>
const tsAssign: newAssign = createNewAssign('ts',100)
console.log(tsAssign)


// Parameters
type AssignParameters = Parameters<typeof createNewAssign> // its a tuple - type AssignParameters = [title: string, points: number]
const assignArgs: AssignParameters = ['Generics',100]
const tsAssign2: newAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)


// Awaited - helps us with ReturnType of a Promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}

// type FetchUsersReturnType = ReturnType<typeof fetchUsers> //type FetchUsersReturnType = Promise<User[]>
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>> //type FetchUsersReturnType = User[]

fetchUsers().then(users => console.log(users))