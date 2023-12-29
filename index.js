numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
console.log(squares);

function square(elem, i, arr) {
    console.log(i);
    console.log(arr);
    return Math.pow(elem, 2);
}