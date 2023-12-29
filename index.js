// FOR EACH: arr.forEach()
// we pass in a callback as an argument into forEach
let students = ["spongebob", "patrick", "squidward"];

// forEach() method automatically provides the three arguments below!
function capitalize(element,  index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); // capitalize each element in the array
}

// call the method on the array and pass in the callback function
console.log(students);
students.forEach(capitalize);
console.log(students);