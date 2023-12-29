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

let selection = 'name'; // x may vary at runtime
person[selection] = 'six';

// ARRAYS
let selectedColors =['red', 'blue']; // array literaly, same as python
x = selectedColors[0]; // same indexing as python
// main difference is we do not get any indexing errors. empty indices are just undefined
// moreover, we can have gaps in the list. eg) [ 'red', 'blue', 'green', <2 empty items>, 'orange' ]

selectedColors[2] = 'green';
selectedColors[5] = 'orange'; // skipped 3 and four, 2 empty items

// note that typeof array is object. it has properties such as length, etc.
// note that empty items as gaps in the list are counted in the length, ie) the length of the array goes up to the last index where an item exists
// for example ['red', 'blue', 'green', <2 empty items>, 'orange'] has a length of 6.

// FUNCTIONS
function greet(name) {
    console.log('Hello ' + name);
} // no need for semicol at end of creating function (like java)

greet('six');

// parameter vs argument
// parameters are what we define for functions to take in
// arguments are what we actually provide when we call the function
// "arguments are the value we supply for parameters"

// passing in less arguments than expected doesnt crash code, it just considers missing arguments as undefined and proceeds

// TYPES OF FUNCTIONS

function square(number) {
    return number * number; // a function with an actual return value
}

let twoSquared = square(2);

// == BROCODE ==

// VARIABLES
// Two steps
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

let x1; // declaration
x1 = 21; // assignment
let x2 = 21; // both together

// we can access and set the content of html files like so:
firstName = "six";
age = 19;
let student = true;

document.getElementById("p1").innerHTML = "hello " + firstName;
document.getElementById("p2").innerHTML = "you are " + age + " years old";
document.getElementById("p3").innerHTML = "enrolled " + student;


// ACCEPT USER INPUT

// simple way
let username = window.prompt("whats ur name"); // browser displays popup box, not practical

// html advanced way
let username2;
document.getElementById("submitButton").onclick = function () { // do onlclick for setting a function to be called on click!
    username2 = document.getElementById("nameText").value; // grab value within textbook
    console.log(username2) 
    document.getElementById("myLabel").innerHTML = username; // set the new innerHTML (text) for the label to be the provided username!
}


// TYPE CONVERSION
age = window.prompt("How old are you?"); // we retrieve this as a string, want to turn it into a number
age = Number(age); // convert the string to a number
age += 1;
console.log("happy bday, you are " + age);

// more examples of converting type
let z;
x = Number("3.14"); // simple
y = String(3.14);
z = Boolean("pizza");
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

// converting something that is not a number into a number, eg:
x = Number("bars");
// will result in the value of x being NaN (not a number)


// MATH
// Math is an object that provides math functionality and constants (pi)
x = 3.14;
x = Math.round(x);
x = Math.ceil(x);
x = Math.floor(x);
x = Math.pow(x, 2); // x^2
x = Math.pow(x, x); // x^x
x = Math.sqrt(x);
x = Math.abs(x);
// max and min
x = Math.max(3, 4, 6);
x = Math.min(-3, 100, 2, -90);

//constant pi
x = Math.PI;

// USEFUL STRING METHODS
usename = "bro";
username.length // length
username.charAt(2); // charAt
username.indexOf("r"); // index of first occurance of a character
username.lastIndexOf("r"); // index of last occurance of a character
username = " whats up ";
username = username.trim(); // gets rid of leading and trailing empty spaces
document.getElementById("p1").innerHTML = username; // no need to trim, html auto trims stuff (for <p> at least)

let phoneNumber = "123-456-7890";
phoneNumber.replaceAll("-", ""); 

// slice() extracts a section of a string and returns it as a new string,
// doesnt modify original string
username = "six pop";
firstName = username.slice(0, 3); // slicing doesnt include last index
lastName = username.slice(4); // no ending index implies go to end

let space = username.indexOf(" ");
firstname = username.slice(0, space)
lastName = username.slice(space + 1);

// METHOD CHAINING
// call one method after another in a continuous line of code (simple)
username = "six";
let letter = username.charAt(0);
letter = letter.toUpperCase();

// we can write the above code more elegantly using method chaining 
letter = username.charAt(0).toUpperCase();

// IF STATEMENTS
// same as java
age = 21;
if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are a child");
}

// CHECKED PROPERTY
// lets us know if a checkbox or a radio button is selected
// .checked is a boolean property for radiobuttons and checkboxes

// checkboxes:
document.getElementById("hiButton").onclick = function() {
    if (document.getElementById("BoxYa").checked) { // use checked attribute
        document.getElementById("hiButton").innerHTML = "thanks!";
    } else {
        document.getElementById("hiButton").innerHTML = "SELECT IT >:("
    }
}

// factor out a constant
const submitButton = document.getElementById("hiButton");

submitButton.onclick = function() {
    if (document.getElementById("BoxYa").checked) {
        submitButton.innerHTML = "thanks!";
    } else {
        submitButton.innerHTML = "SELECT IT >:("
    }
}

// radiobuttons
const submitButton = document.getElementById("hiButton");
const visaButton = document.getElementById("visaBtn");
const masterButton = document.getElementById("masterBtn");
const paypalButton = document.getElementById("ppBtn");

submitButton.onclick = function() {
    if (document.getElementById("BoxYa").checked) { //again, just used .checked
        submitButton.innerHTML = "thanks!";
    } else {
        submitButton.innerHTML = "SELECT IT >:("
    }

    if (visaButton.checked) {
        alert("You are paying with Visa!");
    } else if (masterButton.checked) {
        alert("You are paying with Mastercard!");
    } else if (paypalButton.checked) {
        alert("You are paying with PayPal!");
    }
}

// SWITCHES
// used in place of several else if statements
// examins a value for a match against many case clauses

let grade = "A";

// this is inefficient
if (grade == "A") {
    console.log("You did great!");
}
if (grade == "B") {
    console.log("You did good!");
}
if (grade == "C") {
    console.log("You did okay!");
}
if (grade == "D") {
    console.log("You passed!");
}
if (grade == "F") {
    console.log("You failed!");
}
else {
    console.log("Not a grade!");
}

// use a switch, more efficient:
switch (grade) {
    case "A": 
        console.log("You did great");
        break; // add a break after the code for a case is done
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed!");
        break;
    case "F":
        console.log("You failed!");
        break;
    default: // default for no other matching clause
        console.log("Not a letter grade");
}

// can also check conditions
grade = 95;

switch (true) { // compare true against a bunch of conditions
    case grade >= 90: // compares this against true
        console.log("You did great");
        break; 
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 50:
        console.log("You passed!");
        break;
    case grade < 50:
        console.log("You failed!");
    default: // default for no other matching clause
        console.log("Not a letter grade");
}

// && (and), || (or) logical operators
let temp = 15;
if (30 > temp && temp > 0) {
    console.log("good temp");
} else {
    console.log("bad temp");
}

if (temp > 30 || 0 > temp) {
    console.log("bad temp");
}

// ! (not) operator

if (!(temp > 0)) {
    console.log("it's freezing");
}

// WHILE LOOP
username = "";
while (username == "" || username == null) { // repeatedly prompt users until they provide a username
    username = window.prompt("choose a username");
}

console.log("hello", username);

// DO WHILE LOOP
// do the loop body first, then check condition and repeat if met
// differs from regular while in that we do something BEFORE checking
username;

do {
    username = window.prompt("choose a username");
} while (username == "" || username == null)

console.log("hello", username);

// FOR LOOPS
// same as java 
for (let x = 1; x <= 10; x++) {
    console.log(x);
}
console.log(x); // can't access since we used let

// doing var instead of let makes the variable accessible outside of loop
for (var i = 1; i <= 10; i++) {
    console.log(i);
}

console.log(i); // we can access i since we used var

// BREAK AND CONTINUE
// break: break out of a loop entirely
// continue: skip a loop iteration

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        break; // exits loop
    }
    console.log(i);
}

for (let i = 1; i <= 20; i++) {
    if (i == 13) {
        continue; // skips iteration of when i == 13
    }
    console.log(i);
}

// FUNCTIONS

function happyBday(name) { // simple syntax, just say function before the name
    console.log("Happy Birthday", name);
}

happyBday("bro");

// RETURN STATEMENTS

function areaRect(width, height) {
    return width * height;
}
console.log(areaRect(10, 20));

// TERNARY OPERATOR
// shortcut for if-else stmt
// takes 3 operands
// 1. condition ?
// 2. expression if true
// 3. expression if false

// condition ? exprIfTrue : exprIfFalse

//if-else version:
let adult = checkAgeIfElse(21);
function checkAgeIfElse(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// ternary operator version (much cleaner)
adult = checkAgeTernaryOp(21); 
function checkAgeTernaryOp(age) {
    return age >= 18 ? true : false // condition is age >= 18
}

checkWinner(false);

// don't necessarily need return
function checkWinner(won) {
    won ? console.log("YOU WON!") : console.log("YOU LOST!");
}