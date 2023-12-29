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

// TEMPLATE LITERALS
// basically .f format string in python
// denoted by `
// allow for embedded variables and expressions

// consider this code
let userName = "Bro";
let items = 3;
let total = 75;

console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);

// template literal version
console.log(`Hello ${userName}`);
console.log(`You have ${items} in your cart`);
console.log(`Your total is $${total}`);

// can also stretch a template literal to multiple lines unlike strings
// each line break in the template literal is counded as a line break when logged
let text =
`Hello ${userName}
You have ${items} items in your cart
Your total is $${total}`
console.log(text);
// really useful for updating html element with several lines, eg:
text =
`Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;
console.log(text); // we end up seeing <br> in the console log
// needed <br> for the HTML below

document.getElementById("p1").innerHTML = text; // change innerHTML of paragraph

// FORMATTING NUMBERS AS CURRENCY
// toLocaleString()
// number.toLocaleString(locale, {options});

// 'locale' = specify the language (passing in undefined uses the default language set by your browser)
// 'options' = object with formatting options

let myNum = 123456.789
myNum = myNum.toLocaleString("en-US"); // US english
console.log(myNum); // formats to 123,456.789

myNum = 123456.789
myNum = myNum.toLocaleString("hi-IN");  // hindi
console.log(myNum); // formats to 1,23,456.789

myNum = 123456.789
myNum = myNum.toLocaleString("de-DE");  // german
console.log(myNum);

//currencies

//USD
myNum = 123456.789
myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});
console.log(myNum);
// rupees
myNum = 123456.789
myNum = myNum.toLocaleString("hi-IN", {style: "currency", currency: "INR"});
console.log(myNum);
// euros
myNum = 123456.789
myNum = myNum.toLocaleString("de-DE", {style: "currency", currency: "EUR"});
console.log(myNum);

// percentages
myNum = 0.5;
myNum = myNum.toLocaleString(undefined, {style: "percent"});
console.log(myNum); // formats it to 50%, 1 is 100%

// units
myNum = 100;
myNum = myNum.toLocaleString(undefined, {style: "unit", unit: "celsius"});

// ARRAYS
let arr = ["apple", "orange", "banana"];

arr.push("lemon"); // add element to end of array
arr.pop(); // remove element from end of array

// unshift and shift
arr.unshift("mango"); // add element to start of array
arr.shift(); // remove element from start of array

// LOOP THROUGH ARRAYS
arr = [5, 10, 15, 20];
// for loop
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for-of loop, like a java for each loop, for (int i : arr) {}
for (let i of arr) {
    console.log(i);
}

// SORTING ARRAYS
let fruits = ["apple", "orange", "banana", "mango"];
fruits = fruits.sort(); // sort alphabetically (same as python)
for (let fruit of fruits) {
    console.log(fruit);
}

// for reverse sorting do:
fruits = fruits.sort().reverse();

// SPREAD OPERATOR
// expands out elements of iterables such as array or string
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(...numbers); // logs: 1 2 3 4 5 6 7 8 9

username = "six pop"
console.log(...username); // logs: s i x   p o p

// useful for calling max/min or arrays
console.log(Math.max(numbers)); // results in NaN because we cant use max([Array])
console.log(Math.max(...numbers)); // this works!

// can also use for merging arrays
let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr. Krabs", "Plankton"];
class1.push(class2); // this just creates a nested array! doesn't work
class1.pop();

class1.push(...class2); // same as class1.extend(class2) from python

// REST PARAMETERS
// represents an indefinite number of parameters
// packs arguments into an array

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b));

function sum(a, b) { // not suitable for more than 2 arguments!
    return a + b
}

// solution: use rest parameters

function sumRest(...nums) { // we dont pass in one single nums array!
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}
// the arguments will automatically be packed into a nums array

// we can pass in any number of args since we did ...nums!
console.log(sumRest(a, b));
console.log(sumRest(a));
console.log(sumRest(a, b, c, d, e));

// we can also do something like:
function sumMix(x, y, ...nums) { // ie) minimum args is 2
    let total = x + y;
    for (let num of nums) {
        total += num;
    }
    return total;
}
// when doing this make sure that the rest parameter is always the last parameter

// CALLBACK
// a function passed as an argument to another function
// benefit: we can decide at runtime which function to call in a simple way

// useful example
let tot = newSum(2, 3);
displayConsole(tot);
displayDOM(tot);

function newSum(x, y) {
    let result = x + y;
    return result;
}

function displayConsole(output) {
    console.log(output);   
}

function displayDOM(output) {
    document.getElementById("p2").innerHTML = output;
}

// can write the above with a callback instead:
callbackSum(2, 3, displayConsole); // could easily swap for displayDOM

function callbackSum(x, y, f) {
    f(x + y);
}

function displayConsole(output) {
    console.log(output);   
}

function displayDOM(output) {
    document.getElementById("p2").innerHTML = output;
}

// FOR EACH: arr.forEach()
// we pass in a callback as an argument into forEach
let students = ["spongebob", "patrick", "squidward"];

// forEach() method automatically provides the three arguments below!
function capitalize(element,  index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); // capitalize each element in the array
} // could also use element.substring(1) here, as it behaves same as slice for positive indices.

// call the method on the array and pass in the callback function
console.log(students);
students.forEach(capitalize);
console.log(students);
// might seem strange but the forEach method automatically passes in the 3 args above into the given callback function.


// ARRAY.MAP() METHOD
// array.map() executes a provided callback function once for each array element
// and creates a NEW array

numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
console.log(squares);

function square(elem) { // note that map() also auto passes 3 same args (elem, index, arr)
    // we choose to only make use of elem here but we could also have used the other args
    return Math.pow(elem, 2);
}

// unlike array.forEach(), array.map() creates a new array and fills it with the return value of the callback function
// forEach(): mutates
// map(): creates new

// FILTER() METHOD
// array.filter() creates a new array with elements that pass a condition provided by a callback function

arr = [1, 2, 3, 4, 5, 6, 7, 8];
evens = arr.filter(isEven);

function isEven(elem) {
    return !Boolean(elem % 2);
}

console.log(evens);

// REDUCE() METHOD
// array.reduce(f) reduces an array to a single value. f is a callback.
// a good example of reduce() method is to sum up all the values of an array
let prices = [5, 10, 15, 20, 25];
let totalPrice = prices.reduce(checkOut);
console.log(totalPrice);

// reduce() automatically passes an accumalated value, and the current element
function checkOut(total, element) {
    return total + element;
}
// it is important to understasnd that the accumulated value reduce() passes in
// is just simply an accumulating sum of each callback return. it is nothing fancy.

// CUSTOM SORTING ARRAYS
// use array.sort(f) and pass in f as a callback function
let grades = [100, 50, 20, 90, 60, 80];
let descendingGrades = grades.sort(descendingSort);
console.log(descendingGrades);
let ascendingGrades = grades.sort(ascendingSort);
console.log(ascendingGrades);
// side remark: bc of aliasing, grades, descendingGrades, and ascendingGrades
// are all the same object! to get around this and have descGrades and ascGrades
// unchanging, just use slicing!

// sort() auto passes 2 args into the callback
// two values at a time. 
function ascendingSort(x, y) { // compares two values at a time
    return x - y; 
} // the smaller this return value is, 
// the smaller x is with respect to the other elements
// smaller return value means x should be come before y

function descendingSort(x, y) { 
    return y - x; // swapping x and y "tricks" the sort into seeing
}                 // the opposite comparison
// a smaller return value here means x should come after y
// makes sense

// FUNCTION EXPRESSION !!!! NEW IDEA
// a function expression is a function without a name
// known as an anonymous function.
// benefit: prevents us from polluting the global scope
// with a bunch of random function names
// ie; we can write the function then forget about it later
// assign a variable to some anon function

const greeting = function () {
    console.log("hello!");
} // this function can be forgot about if we reassign greeting

// in JavaScript, functions are "first-class citizens"
// this means they can be treated as reference type values like objects,
// for example, a function can be returned from another function!
// having function expressions allows us to capture some anonymous function in a variable.
// this enhances dynamic behaviour of code.
// we can conditionally define/build functions at runtime!

// CLOSURES !!! NEW IDEA
// a closure is created when a function is defined inside of another function,
// this allows the inner function to access outer function's variables
// even after the outer function has finished executing.
// eg:

function outer() {
    let outerVariable = "I am from outer";

    function inner() {
        console.log(outerVariable); // Accessing outerVariable from the closure
    }

    return inner;
}

let closureFunction = outer();
closureFunction(); // Outputs: "I am from outer"

// we see above that the inner function, assigned to closureFunction() has access to a variable
// in the scope of the outer() function, even though outer() has already finished executing.

// this "functions' retainment of access to the variables in their declared scope" creates a sort of encapsulation for data.
// this is useful for creating private variables (and maintaining state) across multiple function calls.

// Function expressions continued:

// old way of inc/dec button before using function expressions:
let count = 0;
document.getElementById("decreaseBtn").onclick = decreaseCount;
document.getElementById("increaseBtn").onclick = increaseCount;
// note, assign functions without (), or else we end up calling  them!

// we make two top level functions solely for the buttons
function increaseCount() {
    count += 1;
    document.getElementById("counterLabel").innerHTML = count;
}

function decreaseCount() {
    count -= 1;
    document.getElementById("counterLabel").innerHTML = count;
}


// new way with function exprs:
count = 0;
document.getElementById("decreaseBtn").onclick = function () {
    count -= 1;
    document.getElementById("counterLabel").innerHTML = count;
}
document.getElementById("increaseBtn").onclick = function () {
    count += 1;
    document.getElementById("counterLabel").innerHTML = count;
} // no need to create 2 new function names! we are preventing clutter in our code by not making top level functions that other things do not use!


// ARROW FUNCTION EXPRESSIONS !!! NEW IDEA
// =>
// compact alternative to regular functions (just a syntax thing)
// const myFunc = (args) => returnVal;
// eg)

const greeting2 = function (userName) {
    console.log(`hello ${userName}`);
}

greeting2("six");

// compact alternative to above function expression is:
const greeting3 = (userName) => console.log(`hello ${userName}`);
greeting3("six"); // note, no return value, just do a console log!

// another eg:
const percent = function(x, y) {
    return x / y * 100;
}

console.log(`${percent(75, 100)}%`);

// arrow function version:
const percent2 = (x, y) =>  x / y * 100;
// remove return statement

// important rmk: arrow functions are inherently anonymous.
// using a const variable makes their functionality basically identical to named functions
// but they're still just anonymous functions captured in variables.

// another eg)
// recall the sorting stuff from before
grades =  [100, 50 , 90, 80, 70];

// traditional function
grades.sort(descending);
function descending(x, y) {
    return y- x;
}
console.log(grades);

// now with function exprs
grades.sort(function(x, y) {
    return y-x;
});

// arrow functions
grades.sort((x,y) => y-x);

// MAPS
// key value pairs object
// need to use new for calling map constructor unlike arrays.
const store = new Map([
    ["t-shirt", 20], // subarrays within an array passed as an arg into Map()
    ["shorts", 15], // each subarray is a key value pair
    ["jeans", 30],
    ["socks", 5],
    ["underwear", 150],
]);

// Map.forEach(f) auto passes value, key args into the callback
store.forEach((value, key) => console.log(`${key} costs $${value}`));

// note that arrays could also be made using an Array() constrcutor

// both of these are same:
// let arr = [1, 2, 3];
// let arr = new Array(1, 2, 3);

// this is also same (Array constructor doesnt need new)
// let arr = Array(1, 2, 3); 
// note that map constructor needs new, ie; cannot do let mapo = Map([["yo", 1], ["bro", 32]]);

// get() method: Map.get(key)
console.log(store.get("underwear")); // logs 150

// set() method: Map.set(key, value);
store.set("hat", 1);
console.log(store);

// delete() method: Map.delete(key);
store.delete("underwear"); // NOOO
console.log(store);

// has() method: Map.has(key)
console.log(store.has("underwear")); // false now :(

// Map.size property
console.log(store.size);

// OBJECT ORIENT PROGRAMMING IN JS
// object is a group of properties and methods
// properties are values an object has
// methods are "object-specific functions", ie; stuff u can do with object
// use . to access properties and methods!

// how to make an object (NOT A CLASS):
const car = {
    // properties:
    model: "Mustang", // separate with commas!
    color: "black",
    year: "1995",

    // methods:
    drive : function () {
        console.log("vroom");
    }, // note we have to put commas after method braces as well!

    brake : function () {
        console.log("skiddd");
    }
}
// this created an object and stored it in car variable!
// object has no class. it just a single object referenced in car variable

console.log(car);
// logging it shows:
// {model: 'Mustang', color: 'black', year: '1995', drive:f, brake:f}

// access properties
console.log(car.year);

//call methods
car.drive();
car.brake();

// "THIS" KEYWORD
// used to  refer to a particular object; depends on the immediate context


// two objects!
const car1 = {
    model: "Mustang",
    color: "black",
    year: "1995",

    drive : function () {
        console.log(`you drive ${this.model}`);
    }, 

    brake : function () {
        console.log("skiddd");
    },

    thisTest : function () {
        console.log(this);
    }
}

const car2 = {
    model: "mini cooper",
    color: "lime",
    year: "2001",

    drive : function () {
        console.log(`you drive ${this.model}`); // refer to property with this.property!
    }, 

    brake : function () {
        console.log("skdd");
    }
}

car1.drive();
car2.drive();

// this depends on the context
// within an object, the context is the object itself
car1.thisTest();
// logs the object, same as if we did console.log(car1);

// outside of any objects, our context is a Window object!
console.log(this);
// {window: Window, self: Window, document: document, name: '', location: Location, …}
// we can use this to edit window properties! eg)
// this.name = "cool";

