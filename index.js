arr = [1, 2, 3, 4, 5, 6, 7, 8];
evens = arr.filter(isEven);

function isEven(elem) {
    return !Boolean(elem % 2);
}

console.log(evens);