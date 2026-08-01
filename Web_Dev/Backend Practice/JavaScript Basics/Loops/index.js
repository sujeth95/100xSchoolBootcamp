// Question-1: WAP that logs numbers from 1 to 10 to the console.
const printNumbers = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(`The number is: ${i}`);
    }
}
printNumbers(10);

console.log("-----------------------------------------");

// Question-2: WAP that log all even numbers from 2 to 20.

const evenNumbers = (num) => {
    for (let i = 2; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(`The even number is: ${i}`);
        }
    }
}

evenNumbers(20);

console.log("-----------------------------------------");

// Question-3: WAP that counts backward from 10 to 1 and logs the values.

const reverseCount = (num) => {
    for (num; num >= 1; num--) {
        console.log(`The number in reverse order is: ${num}`);
    }
}

reverseCount(10);

console.log("-----------------------------------------");

// Question-4: WAP to calculate the sum of numbers from 1 to 5.

const sumOfNumbers = (nums) => {
    let sum = 0;
    for (let i = 1; i <= nums; i++) {
        sum += i;
    }
    return sum;
}

console.log(`The sum of numbers 1 to 5 is: ${sumOfNumbers(5)}`);

console.log("-----------------------------------------");

// Question-5: WAP that prints powers of 2 (2^n) up to 64.
const printPowers = () => {
    // NOTE: if used i = 1, when using the formula 2(2^n). The number calculated is 1 step ahead.
    for (let i = 0; ; i++) {
        let number = 2 * (2 ** i);
        if (number > 64) {
            break;
        }
        console.log(`Power print of n = ${i} is: ${number}`);
    }

}

printPowers();

console.log("-----------------------------------------");

// Question-6:  WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.
let i = 4;
do {
    let guess = Math.floor(Math.random() * 10 + 1);

    if (guess == i) {
        console.log("You guessed correctly.")
        break;
    }

} while (true);

console.log("-----------------------------------------");

// Question-7: WAP to display the multiplication table (1 to 10) in the console.
for (let number = 1; number <= 10; number++) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
    console.log(`\n`);
}

console.log("-----------------------------------------");

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).
for (let i = 0; ; i++) {
    if (i == 3) {
        continue;
    }
    else if (i > 5) {
        break;
    } else {
        console.log(i);
    }
}


console.log("-----------------------------------------");

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

for (let i = 1; i <= 30; i++) {

    let tens = Math.floor(i / 10);
    let ones = i % 10;

    let sum = tens + ones;

    if (i <= 30) {
        if (sum % 3 == 0) {
            console.log("Fizz");
            continue;
        } else if (sum % 5 == 0) {
            console.log("Buzz");
            continue;
        }

        if ((sum % 3 == 0) && (sum % 5 == 0)) {
            console.log("FizzBuzz");
            continue;
        }

        console.log(i)
    }
}