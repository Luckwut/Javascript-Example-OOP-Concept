// Simple Polymorphism

class Shape {
    constructor(name) {
        this.name = name;
    }

    // Base Method
    getArea() {
        console.log("Area calculation not implemented for base Shape class!");
    }
}

class Square extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }

    // Override method
    getArea() {
        return this.side * this.side;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name);
        this.radius = radius;
    }

    // Override method
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

function calculateArea(shape) {
    console.log(shape.getArea());
}

let mySquare = new Square("Square", 5);
let myCircle = new Circle("Circle", 3);

calculateArea(mySquare);
calculateArea(myCircle);
