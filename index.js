let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

function sumRest(...nums) { // we dont pass in one single nums array!
    let total = 0;
    for (let num of nums) {
        total += num;
    }
    return total;
}

// we can pass in any number of args since we did ...nums!
console.log(sumRest(a, b));
console.log(sumRest(a));
console.log(sumRest(a, b, c, d, e));