const input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
const output = {};

const categories = Object.keys(input);
let i = 0;

while (i < categories.length) {
    const category = categories[i];
    const numbers = input[category];
    let total = 0;

    let j = 0;
    while (j < numbers.length) {
        total = total + numbers[j];
        j = j + 1;
    }
    output[category] = total;
    i = i + 1;
}

console.log(output);    