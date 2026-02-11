class Shape {
    constructor(color){
        this.color = color;
    }
    paint(){
     let paint2 = console.log(`Painting with color ${this.color}`);
     return paint2;
    }
}

class Rectangle extends Shape {
    constructor(height, width, color) {
        super(color);
        this.height = height;
        this.width = width;
    }
    static whoamI(){
        return "I am a rectangle";
    }
    area() {         // non static method
        return this.width * this.height;
    }
    perimeter() {            // non static method
        return 2 * (this.width + this.height);
    }
}

// let r1 = new Rectangle(1, 2, "red");
// let r2 = new Rectangle();
// console.log(r1.area());
// console.log(r1.perimeter());
// console.log(Rectangle.whoamI());       // static methods are methods which are directly attached in class and are not attached in internal objects 

class Circle extends Shape{
    constructor(radius,color) {
        super(color);
        this.radius = radius;
    }
    area() {
        return 3.14 * this.radius * this.radius;
    }
    perimeter() {
        return 2 * 3.14 * (this.radius) 
    }
}

class Square extends Shape{
    constructor (side, color){
        super(color);
        this.side = side;
    }
    area(){
        return this.side * this.side;
    }
    perimeter(){
        return 4 * this.side;
    }
    
}


const r1 = new Rectangle(10,20,"red");
const c1 = new Circle(20,"yellow");
const s1 = new Square(300,"red");
console.log(s1.paint());
console.log(c1.paint());