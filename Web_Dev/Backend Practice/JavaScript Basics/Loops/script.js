// console.log(Math.floor((Math.random() * 10 + 1)));

// const num = 58;

// const tens = Math.floor(num / 10); // Gets the first digit (5)
// const ones = num % 10;             // Gets the second digit (8)

// console.log(tens);

for (let i = 1; i <= 30; i++) {

    let tens = Math.floor(i / 10);
    let ones = i % 10;

    let sum = tens + ones;

    if (i == 10) {
        console.log("Buzz");
        continue;
    }

    if (i == 15) {
        console.log("FizzBuzz")
        continue;
    }
    if (i == 30) {
        console.log("FizzBuzz")
        continue;
    }

    if (sum % 3 == 0) {
        console.log("Fizz");
        continue;
    } else if (sum % 5 == 0) {
        console.log("Buzz");
        continue;
    }

    console.log(i)
}