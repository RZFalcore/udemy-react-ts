//  Primitives :     number, string, boolean
//  Complex : arrays, objects
//  Function types, parameters

//----------------------------------------------------------------
//  Primitives
//  Types goes with small first letter

let age: number = 24;

let userName: string = "Harry";

let isInstructor: boolean = true;

//----------------------------------------------------------------
//  Complex types

let hoobbies: string[] = ["Sports, Coding"];

//  May use :any types, but what sense?)
// let person: any = {}

let person: {
    name: string;
    age: number;
};

person = { name: "Harry", age: 20 };
//  Gets error!
// person = { isInstructor: false };

let people: {
    name: string;
    age: number;
}[]

//----------------------------------------------------------------
//  Type inference
//  It`s not neccessery to specify type if not needed

// let course = "Front-end" === let course: string = "Front-end";


//  But if needed UNION types can be used (2,3 or more)

// let course: string | string[] | number = "Front-end";
//----------------------------------------------------------------
//  Type Aliases
//  Can define aliases for repeated structures

type Student = {
    name: string,
    age: number
}
let student: Student;
let students: Student[];
//----------------------------------------------------------------
//  Functions and types
//  No need to explicitly defined types, TS do it automaticly.
//  Except cases when you needed ;)
function add(a: number, b: number): number | string {
    return a + b;
}

//  With no return have VOID type value. 
function printOutput(value: any) {
    console.log(value)
}
//----------------------------------------------------------------
//  Generics
//  Helps write flexible, but type sensitive funcs

//  Base variant
// function insertAtBeginning(array: any, value: any) {
//     const newArray = [value, ...array];
//     return newArray;
// }
// const demoArray = [1, 2, 3, 4, 5];
// const updatedDemo = insertAtBeginning(demoArray, 0); // [0,1,2,3,4,5]

// updatedDemo[0].split('') // Runtime error, have type any, TS will not react

//  With generic usage
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3, 4, 5];
const updatedDemo = insertAtBeginning(demoArray, 0); // [0,1,2,3,4,5]

// updatedDemo[0].split('') // TS sees error

//  Can not just use the angle brackets to define a generic type 
//  but also to USE a generic type and explicitly set the placeholder type 
//  that should be used - sometimes this is required if TypeScript is not able to 
//  infer the(correct) type.
const stringArray = insertAtBeginning<string>(['a', 'b', 'c'], 'd');