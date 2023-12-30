class Car {
    // use static keyword
    static numOfCars = 0;

    constructor(model) {
        this.model = model;
        Car.numOfCars ++; // refer to it using Class.property, not this.property,
        // that is, Car.numOfCars and not this.numOfCars
    }

    // static method, same idea
    static startRace() {
        console.log("3.. 2.. 1.. GO!");
    }
}

car1 = new Car("honda");
car2 = new Car("ferrari");
let car3 = new Car("toyota");
let car4 = new Car("nissan");

// access the static variable directly from class
// cannot invoke it from a specific instance
console.log(Car.numOfCars);

// call static method directly from class
// cannot invoke it from a specific instance
Car.startRace();