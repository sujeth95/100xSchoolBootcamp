const input = {
    a: 20,
    b: 60,
    c: 40,
    d: 90,
}

let output = {};

for(let key in input){
    if(input[key] > 50){
        output[key] = input[key]
    }
}
console.log(output);