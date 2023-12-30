try {
    let x = window.prompt("enter a number");
    x = Number(x); // wont catch this if we put in something like "Pizza"

    if (isNaN(x)) throw "That wasn't a number!";
    if (x == "") throw "That was empty!";


    console.log(`${x} is a number!`);
} 

catch(error) {
    console.log(error);
}

finally {
    console.log("this always executes");
}
