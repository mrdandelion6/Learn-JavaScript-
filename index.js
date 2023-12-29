// how to make an object:
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

console.log(car);
// logging it shows:
// {model: 'Mustang', color: 'black', year: '1995', drive:f, brake:f}

// access properties
console.log(car.year);

//call methods
car.drive();
car.brake();
