const input = { a: 1, b: "hello", c: 3 };
let allNumbers = true;

for(let key in input){
    if(typeof input[key] !== "number"){
        allNumbers = false;
        break;
    }
}

console.log(allNumbers);