// CUSTOM SORTING ARRAYS
// use array.sort(f) and pass in f as a callback function
let grades = [100, 50, 20, 90, 60, 80];
let descendingGrades = grades.sort(descendingSort);
console.log(descendingGrades);
let ascendingGrades = grades.sort(ascendingSort);
console.log(ascendingGrades);

// sort() auto passes 2 args into the callback
// two values at a time. 
function ascendingSort(x, y) { // compares two values at a time
    return x - y; 
} // the smaller this return value is, 
// // the smaller x is with respect to the other elements
// // smaller return value means x should be come before y

function descendingSort(x, y) { 
    return y - x; // swapping x and y "tricks" the sort into seeing
}                 // the opposite comparison
// a smaller return value here means x should come after y
// makes sense
