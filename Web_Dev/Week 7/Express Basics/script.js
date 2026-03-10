// console.log(process.argv);

// let args = process.argv;
// for (let i = 2; i < args.length; i++) {
//     console.log("hello & welcome to", args[i]);
// }

// const math = require("./math.js");

// console.log(math.sum(2, 2));
// console.log(math.PI);

// const info = require("./Fruits");

// console.log(info);

import { sum, PI } from "./math.js"
import { generate } from "random-words";

console.log(sum(1, 2));
console.log(PI);
console.log(generate());