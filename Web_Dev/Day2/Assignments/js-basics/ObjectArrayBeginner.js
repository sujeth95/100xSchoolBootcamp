// Question 1:
// const input = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] };
// const output = {};

// const categories = Object.keys(input);  // ["food", "travel", "bills"]
// let i = 0;  // start with the first category

// while (i < categories.length) {
//   const category = categories[i];   // pick the current category
//   const numbers = input[category];  // get the list of numbers
//   let total = 0;

//   let j = 0;  // start with the first number
//   while (j < numbers.length) {
//     total = total + numbers[j];  // add the number to total
//     j = j + 1;                   // move to the next number
//   }

//   output[category] = total;  // save the total for this category
//   i = i + 1;                 // move to the next category
// }

// console.log(output);
// { food: 60, travel: 20, bills: 100 }


//--------- Question 2 --------------------------------

// let input = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = {};

// let i = 0;
// for (i = 0; i < input.length; i++) {
//   let word = input[i];
//   count[word] = (count[word] || 0) + 1;
// }
// console.log(count);

// Effiecient way of writing the above:
const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = {};

for(let word of input) {
  count[word] = (count[word] || 0) + 1;
}

console.log(count);