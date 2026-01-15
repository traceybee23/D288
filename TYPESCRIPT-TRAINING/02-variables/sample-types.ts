let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "John";
let lastName: string = 'Doe';

// let's break it

// found = 0;
// grade = "A";
// firstName = false;
// lastName = 12;

//flag to prevent compiling with errors: tsc -noEmitOnError sample-types.ts

console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);

//use template strings
console.log(`Hi ${firstName} ${lastName}`);
