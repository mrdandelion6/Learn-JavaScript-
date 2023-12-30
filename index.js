
let date = new Date();
date = date.toLocaleString(); // makes it more readible and compact

document.getElementById("dateLab").innerHTML = date;

// passing in an argument into the Date() constructor gives the date
// from epoch time + milliseconds as the argument.

date = new Date(0);
date = date.toLocaleString();
document.getElementById("dateLab").innerHTML = date;
// gives epoch time: 12/31/1969, 7:00:00 PM

date = new Date(1000); // 1 second past epoch time
date = date.toLocaleString();
document.getElementById("dateLab").innerHTML = date;

// can also pass other args (there are several constructors)
date = new Date(2023, 0, 1, 2, 3, 4, 5); 
// (year, month - 1, day, hour, minute, second, ms)
date = date.toLocaleString();
document.getElementById("dateLab").innerHTML = date;

// also string argument
date = new Date("January 1, 2023, 00:00:00"); 

// some get methods
console.log(date.getFullYear()); // returns the year
console.log(date.getDate()); // returns the day
console.log(date.getMonth()); // returns month - 1
// also corresponding set methods

date = date.toLocaleString();
document.getElementById("dateLab").innerHTML = date;

// formatting date and time
// useful
function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // remember .getMonth() returns month - 1
    let day = date.getDate();

    return `${month}/${day}/${year}`
}

date = new Date();
document.getElementById("dateLab").innerHTML = formatDate(date);
