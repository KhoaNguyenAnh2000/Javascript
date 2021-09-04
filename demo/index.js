// My fist JS code here!
/*
rules for name:
no reserved words
cannot start with a number (1name)
cannot contain space or hyphen
*/

let firstName = 'Khoa';
let lastName = "Nguyen";
//console.log('Hello  ' + firstName + ' ' + lastName);

//primiitve types
let age = 21; // this is a number
let temperature = 36.7; // this is also a number, no float
let isTrue = false;
let Job = undefined;
//let selectJob = 'engineer';
let selectJob = null; // for removing values of variables
//console.log('I want to be a/an ' + selectJob);

let truth = 'it is a dynamic language';
let because = 'JS';
let that = 'is a language that can change at runtime';

// reference types
// object
let student = {
    name: 'Khoa',
    age: 30
};

// Dot notation
student.name = 'something';
// Bracket notation
let selection = 'name';
student[selection] = 'something else';

console.log(student.name);

// array
let selectedColors = ['red', 'blue'];
selectedColors[2] = ['teal', 'pearl'];
console.log(selectedColors[2]);

// functions
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}
greet(firstName, lastName);

function square(number) {
    return number * number;
}
let numb = square(2);
console.log(numb);