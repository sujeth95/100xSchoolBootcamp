
// const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
// const counts = {};

// for (const num of arr) {
//   counts[num] = counts[num] ? counts[num] + 1 : 1;
// }

// console.log(counts);
// console.log(counts[5], counts[2], counts[9], counts[4]);

const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
const counts = {};

for (let i = 0; i < arr.length; i++){
    counts[i] = counts[i] ? counts[i] + 1 : 1;
}
console.log(counts);