// ------------ Question 1:------------------------------
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
//   let word = input[i];     // gets the current word.
//   count[word] = (count[word] || 0) + 1;  // (output[word] || 0) -> treats missing value as 0.
// }
// console.log(count);

// Effiecient way of writing the above:
// const input = ["apple", "banana", "apple", "orange", "banana", "apple"];
// const count = {};

// for(let word of input) {
//   count[word] = (count[word] || 0) + 1;
// }

// console.log(count);


//--------------- Question 3---------------------
// const input = { a: "x", b: "y", c: "z" };
// let output = {};

// for (const key in input) {
//     let value = input[key];
//     output[value] = key;
// }

// console.log(output);


//------------ Question 4 -----------------------

// const input = { a: 10, b: 50, c: 20 };
// let maxKey = "";
// let maxValue = 0;

// for(let key in input){
//     if(input[key] > maxValue){
//         maxValue = input[key];
//         maxKey = key;
//     }
// }

/* NOTE:
    > → keeps first biggest
    >= → keeps last biggest
*/

// console.log(maxKey);


// --------------- Question 5 -----------------------

// const input = {
//     fruits: ["apple", "banana"],
//     veggies: ["carrot", "pea"]
// };
// let result = [];

// for(let key in input){
//     result.push(...input[key]);
// }

/*
    using ...input[key] merges two arrays into one.
*/
// console.log(result);


// --------------- Question 6 ---------------------------
// const input = [
//     { name: "A", city: "Delhi" },
//     { name: "B", city: "Mumbai" },
//     { name: "C", city: "Delhi" }
// ];

// let result = {};

// for(let person of input){
//     if(!result[person.city]) {
//         result[person.city] = [];
//     }

//     result[person.city].push(person.name);
// }

// console.log(result);


// ---------------- Question 7 ------------------------------------
// const input = { a: 20, b: 60, c: 40, d: 90 };
// let output = {};

// for(let key in input){
//     if(input[key] > 50){
//         output[key] = input[key];
//     }
// }

// console.log(output);


// --------------- Question 8 -------------------------------------

const input = { A: [80, 90], B: [70, 75, 85] };

let maxStudent = "";
let maxAverage = 0;

for (let student in input) {
  let marks = input[student];

  // find sum of marks
  let sum = 0;
  for (let mark of marks) {
    sum += mark;
  }

  // find average
  let avg = sum / marks.length;

  // check if highest average
  if (avg > maxAverage) {
    maxAverage = avg;
    maxStudent = student;
  }
}

console.log(maxStudent);
