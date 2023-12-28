// SEPARATION OF CONCERNS:
// we separate our javascript code from our html code
// html: content, js: behaviour

// JS in Node
// To use JS in node, open terminal and simply cd to the directory where the JS file is (fir example say our JS file is index,js).
// now type "node index.js" and it will run the index.js file using Node.

// VARIABLES
// in js, we use let keyword to declare variables.
let x = 1;
x = 4;

// CONTSTANTS
// kind of like static variables in java, do not change
const y = 0.5; // always use const on vars u dont need to reassign

// below are some primative/value types:
// string, number, booleans, undefined, null
// note, we don't have floats or integers, just number

let name = 'Faisal'; // typically use single quotes for strings in javascript
let age = 19;
let isCool = true;

let firstName; // value is undefined automatically
// so the above is same as
let lastName = undefined;

// null is different from undefined.
// use null when we want to clear variable's value
if (lastName = undefined) {
    lastName = null;
}

// 2 kinds of languages:
// static language: variable types cannot change once set
// dynamic language: variable types can change
// JS is a dynamic language.

// null is a typeof object

// OBJECTS
// objects are reference type
// arrays and functions are also reference types

let person = {}; //object literal
person = {
    name: 'fsl', // object properties
    age: 20 // note no semicols
};

// property access 2 ways:

// dot notation
person.name = 'six';

// bracket notation
person['name'] = 'sixpop';

// we nomrally use dot notation, and only really use bracket notation if the property name could vary at runtime
// eg if the users choose the property name, then we can have a variable for the property name:

x = 'name'; // x may vary at runtime
person[x] = 'six';