// Simple Inheritance

// Parent class (superclass)
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat(food) {
        console.log(`${this.name} is eating ${food}.`);
    }

    sleep(hours) {
        console.log(`${this.name} is sleeping for ${hours} hours.`);
    }
}

// Subclass 1
class Bird extends Animal {
    constructor(name, age, species) {
        super(name, age);
        this.species = species;
    }

    fly(distance) {
        console.log(`${this.name} has flown a distance of ${distance} meters`);
    }
}

// Subclass 2
class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    walk(distance) {
        console.log(`${this.name} has walked a distance of ${distance} meters`);
    }

    meow() {
        console.log(`${this.name} is meowing.`);
    }
}

const myBird = new Bird("Kenari", 3, "canary");
const myCat = new Cat("Oren", 2, "orange");

myBird.fly(200);
myCat.meow();
myCat.walk(3141592653589);