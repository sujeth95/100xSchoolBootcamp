function sum(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

function doArithmetic(a, b, fn){
    let ans =fn(a,b);
    return ans;
}

const ans1 = doArithmetic(1, 2, sum);
const ans2 = doArithmetic(1, 2, sub);
console.log(ans1);
console.log(ans2);

// const fs = require("fs");

// const contents = fs.read("a.txt", "utf-8");
// console.log(contents);