const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
const output = {};

let i = 0;
for (i; i < input.length; i++) {
    let word = input[i];
    output[word] = (output[word] || 0) + 1;
}

console.log(output);