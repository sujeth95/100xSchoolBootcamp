function printPoem() {
    console.log("Twinkle Twinkle Little Star");
    console.log("how I wonder what you are");
}

// printPoem();
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

// rollDice();

let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }

    return result;
}

// console.log(concat(str));

// Concept of lexical scope.
function outerFunc(){
    let x = 5;
    let y = 6;
    function innerFunc() {
        let a = 10;       // this variable cannot be accessed out of this function.
        console.log(x);
        console.log(y);
    }
    innerFunc();       // The function cannot be called out of this function.
}
// console.log(outerFunc());


// Practice Questions
let greet = "hello";

function changeGreet(){
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();