// Problem 1 -> Greet function
const greet = (firstName: string) => {
    console.log(`Hii ${firstName}`);
}

greet("Sujeet");

// NOTE: Tyepscript cannot get logical errors but can get type errors.

// Problem 2 -> sum function
const sum = (x: number, y: number): number => {
    return x + y;
}

console.log(`The sum is: ${sum(10, 20)}`);


// Problem 3 -> return true or false based on if a user is 18+
const above18 = (age: number) => {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(above18(20));
console.log(above18(18));
console.log(above18(11));

// Problem 4 => Create a function that takes another function as input and runs it after 1 second.

const secondFn = (firstFn: () => void) => {
    setTimeout(firstFn, 2000);
}

const firstFn = () => {
    console.log("hii there");
}

secondFn(firstFn);

// NOTE: Correct way of writing function inside function in typescript.
// function delayedCall(fn: () => void) {
//     setTimeout(fn, 1000);
// }

// delayedCall(() => {
//     console.log("hii there");
// })

// SIMPLIFIED VERSION
// const delayedCall = (anotherFn: () => void) => {
//     setTimeout(anotherFn, 1000);
// }

// const log = () => {
//     console.log("Hello");
// }

// delayedCall(log);