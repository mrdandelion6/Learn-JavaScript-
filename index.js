
class Car {
    constructor(power) {
        this._power = power; 
        this._gas = 25;
    }

    get power() { 
        return `${this._power}hp`;
    }
    get gas() { 
        return `${this._gas}L (${this._gas / 50 * 100}%)`;
    }

    // note setters must have EXACTLY one parameter
    set gas(value) {
        if (value > 50) {
            value = 50;
        } else if (value < 0) {
            value = 0;
        }
        this._gas = value;
    }
}

let car11 = new Car(500);
console.log(car11.gas);

car11.gas = 40;
console.log(car11.gas);

car11.gas = 100;
console.log(car11.gas);

car11.gas = -30;
console.log(car11.gas);