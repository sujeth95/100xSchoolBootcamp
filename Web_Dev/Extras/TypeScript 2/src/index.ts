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

interface Address {
    city: string;
    country: string;
    pincode: number;
    houseNumber?: string;
}
interface User {
    name: string,
    age: number,
    address: Address
}

let user: User = {
    name: "sujeet",
    age: 21,
    address: {
        city: "Ranchi",
        country: "India",
        pincode: 1002483
    }
}

function isLegal(user: User): boolean {
    return user.age >= 18
}