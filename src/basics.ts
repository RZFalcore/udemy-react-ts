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