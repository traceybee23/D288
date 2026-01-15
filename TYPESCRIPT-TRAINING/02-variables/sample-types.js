var found = true;
var grade = 88.6;
var firstName = "John";
var lastName = 'Doe';
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
console.log("Hi ".concat(firstName, " ").concat(lastName));
