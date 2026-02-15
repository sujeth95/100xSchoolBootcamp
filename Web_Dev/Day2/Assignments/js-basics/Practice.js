const input = {
    fruits: ["apple", "banana"],
    veggies: ["carrot", "pea"]
}

let result = [];

for(let key in input){
    result.push(...input[key]);
}

console.log(result);