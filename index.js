class Animal {
    alive = true;

    eat() {
        console.log(`${this.name} is eating`);
    }
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}

class goodRabbit extends Animal {
    name = "rabbit";

    run() {
        console.log`${this.name} is running`;
    }
}
class goodFish extends Animal {
    name = "fish";

    swim() {
        console.log`${this.name} is swimming`;
    }
}
class goodHawk extends Animal {
    name = "hawk";

    fly() {
        console.log`${this.name} is flying`;
    }
}

const rabbit = new goodRabbit();
const fish = new goodFish();
const hawk = new goodHawk();

console.log(rabbit.alive);
console.log(rabbit.eat());
console.log(fish.sleep());