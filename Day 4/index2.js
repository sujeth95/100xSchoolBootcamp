class Rectangle {
    constructor(height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
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

let r1 = new Rectangle(1, 2, "red");
let r2 = new Rectangle();
console.log(r1.area());
console.log(r1.perimeter());
console.log(Rectangle.whoamI());       // static methods are methods which are directly attached in class and are not attached in internal objects.