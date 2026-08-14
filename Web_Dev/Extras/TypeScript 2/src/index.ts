// interfaces and types

// const greet = (name: string): string => {
//     return "Hello " + name;
// }

// const isEven = (num: number): boolean => {
//     if (num % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// const greeting = greet("sujeet");
// console.log(greeting);

// USING INTERFACE...........

// interface Address {
//     city: string;
//     country: string;
//     pincode: number;
//     houseNumber?: string;
// }
// interface User {
//     name: string,
//     age: number,
//     address: Address
// }

// let user: User = {
//     name: "sujeet",
//     age: 21,
//     address: {
//         city: "Ranchi",
//         country: "India",
//         pincode: 1002483
//     }
// }

// function isLegal(user: User): boolean {
//     return user.age >= 18
// }


// Interfaces as a class......

// let person: People = {
//     name: "sujeet",
//     age: 21,
    // greet: () => {
    //     return "hi"
    // }
// }

// let greeting = person.greet();
// console.log(greeting);

interface User {
    name: string,
    age: number,
    isLegal(): boolean
    // greet: () => string,     // greet is a function
    // greet2(): string
    // greet(phrase: string): void  //greet is a function
}

class Manager implements User {
    // name: string;
    // age: number;

    constructor(public name: string, public age: number) {
        this.name = name;
        this.age = age;
    }

    isLegal() {
        return this.age > 18
    }
}

let m = new Manager("John", 30);
console.log(m.age)
console.log(m.isLegal());

// LEARNING ABOUT EXTENDS IN CLASS

// class Shape{
//     area() {
//         console.log("Hii i am area");
//     }
// }

// class Rectangle extends Shape{
//     width: number;
//     height: number;

//     constructor() {
//         super()         //important when using extends in class
//         this.width = 1;
//         this.height = 2;
//     }
// }



// ABSTRACT CLASSES...........

// abstract class User {
//     // name: string
//     constructor(name: string) {
//         this.name = name
//     }

//     abstract greet: () => string;
// }