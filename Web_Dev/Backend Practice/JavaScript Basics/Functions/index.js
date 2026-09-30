// Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

const printName = (name) => {
    console.log(`Hello, ${name}!`);
}
printName("Power Rangers");

console.log("------------------------------------------");

// Question-2:  Write a function that takes two parameters, adds them together, and returns the result.
const addNumber = (x, y) => {
    return x + y;
}
console.log(addNumber(2, 10));

console.log("------------------------------------------");

// Question-3:  Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

const greetings = (hour) => {

    if (hour < 12) {
        console.log("Good Morning");
    } else if (hour < 17) {
        console.log("Good Afternoon");
    } else {
        console.log("Good Evening");
    }
}

greetings(20);

console.log("------------------------------------------");

// Question-4:  Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

const calRectangle = (length, width) => {
    return length * width;
}
console.log(`Area of rectangle is: ${calRectangle(12, 2)}.`);

console.log("------------------------------------------");

// Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent
const numberExponent = (base, exponent) => {
    return base ** exponent;
}

console.log(`The exponential result is: ${numberExponent(2, 4)}.`);


console.log("------------------------------------------");

// Question-6:  Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.
const primeOrNot = (number) => {
    if (number <= 1) {
        return notPrime();
    } else if (number == 2) {
        return primeNumber();
    }
    else {
        for (let i = 2; i < number; i++) {
            if (number % i == 0) {
                return notPrime();
            } else {
                return primeNumber();
            }
        }
    }
}

const primeNumber = () => {
    console.log("Prime number");
}

const notPrime = () => {
    console.log("Not Prime");
}

primeOrNot(2);

console.log("------------------------------------------");

// Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

const localVariable = () => {
    let variableIsLocal = console.log("This is a local variable");
    return variableIsLocal;
}

let variableIsGlobal;
const globalVariable = () => {
    variableIsGlobal = console.log("This is a global variable");
    return variableIsGlobal;
}

localVariable();   // This function have a local variable which is inside the function.
globalVariable();   // This function have a global variable which is outside the function but can be accessed inside the function without declaration.

console.log("------------------------------------------");

// Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.
const outerFunc = () => {
    return innerFunc();
}

const innerFunc = () => {
    console.log("This comes from inner function.");
}

outerFunc();

console.log("------------------------------------------");

// Question-9:  Write a recursive function to calculate the factorial of a given number.
const recursiveFactorial = (num) => {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }

    return factorial
}

console.log(`The factorial is: ${recursiveFactorial(6)}`)

console.log("------------------------------------------");

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x))

// DEMO PRACTICE SOLUTION...........
// const f = (x) => x + 2;
// const g = (x) => x * 2;

// const compositeFunction = (firstFunction, secondFunction) => {
//     return (value) => {
//         return firstFunction(secondFunction(value));
//     }
// }

// // const h = compositeFunction(f, g);
// console.log(`The result of the composite function is: ${compositeFunction(f, g)(2)}`);  //We are giving the value for f and g function which is 2 right now.


const firstFunction = (x) => x + 2;
const secondFunction = (x) => x * 2;

const composeFunction = (firstFunction, secondFunction) => {
    return (x) => {
        return firstFunction(secondFunction(x));
    } 
}

console.log(`The compose function is: ${composeFunction(firstFunction, secondFunction)(2)}`)