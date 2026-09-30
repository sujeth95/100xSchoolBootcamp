// callback
const fs = require("fs");

function print(err, data) {
    console.log(data);
}

fs.readFile("a.txt", "utf-8", print);  //asynchronously 
fs.readFile("b.txt", "utf-8", print);

setTimeout(() => {
    console.log("This is setTimout function")
}, 0);

console.log("Done");

// NOTE: Input output operations are expensive operations than loops and setTimeout functions.
// NOTE: Async function needs a callback.