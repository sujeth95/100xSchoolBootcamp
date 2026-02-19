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

// const input = { A: [80, 90], B: [70, 75, 85] };

// let maxStudent = "";
// let maxAverage = 0;

// for (let student in input) {
//   let marks = input[student];

//   // find sum of marks
//   let sum = 0;
//   for (let mark of marks) {
//     sum += mark;
//   }

//   // find average
//   let avg = sum / marks.length;

//   // check if highest average
//   if (avg > maxAverage) {
//     maxAverage = avg;
//     maxStudent = student;
//   }
// }

// console.log(maxStudent);


// ----------------- Question 9 ---------------------------------
// const input = { x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] };
// let output = [];
// let uniqueValue = 0;

// for(let key in input){
//     for(let value of input[key]){
//         if(value>uniqueValue){
//             uniqueValue = value;
//             output.push(uniqueValue);
//         }
//     }
// }

// console.log(output);
// console.log(uniqueValue);


// -------------------- Question 10 --------------------------------
// const input = { name: "Rahul", age: 23, city: "Noida" };
// const keys = ["name", "city"];

// let result = [];

// for(let key of keys){
//     result[key] = input[key]
// }

// console.log(result);


// -------------------- Question 12 -------------------------------------
// const input = { a: 3, b: 1, c: 2 };

// // convert object -> array of [key, value]
// let entries = Object.entries(input);

// //sort by value (small to big)
// entries.sort((a, b) => a[1] - b[1]);

// console.log(entries);

// OTHER METHOD TO DO THE SAME...............
// const input = { a: 3, b: 1, c: 2 };

// // get keys and sort them using values
// let sortedKeys = Object.keys(input).sort((a,b) => input[a] - input[b]);

// //convert to required format
// let result = [];

// for(let key of sortedKeys) {
//     result.push([key,input[key]]);
// }

// console.log(result);


// --------------------------- Question 13 ----------------------------------
// const input = { a: 1, b: 2, c: 3 };
// let output = "";
// let counter = 0;

// for(let key in input){
//     counter ++;
//     output = counter;
// }

// console.log(output);


// ------------------------------- Question 14 --------------------------------
// function capitalFirstLetter(val){
//     return String(val).charAt(0).toUpperCase() + String(val).slice(1);
// }

// const input = { name: "alice", city: "delhi" };
// let output = {};

// for(let key in input){
//     input[key] = capitalFirstLetter(input[key]);
//     output[key] = input[key];
// }

// console.log(output);



// ----------------------------- Question 15 --------------------------------------
// const input = { name: "Alice", age: 25 };
// let output = "";

// for (let key in input) {
//     output = output + key + "=" + input[key] + "&";      //output contains undefined so won't gets calculated in the first loop but contains the value (name=Alice&) in second loop.
// }

// console.log(output);


// -------------------------------- Question 16 -------------------------------------------
// const input = [1, 2, 3, 4, 5, 6];
// let evenCounter = 0;
// let oddCounter = 0;

// for (let key in input) {
//     if (key % 2 == 0) {
//         evenCounter++;
//     } else {
//         oddCounter++;
//     }
// }

// console.log({ even: evenCounter, odd: oddCounter});


// SHORTER AND CLEANER VERSION OF THE ABOVE SOLUTION:
// const input = [1, 2, 3, 4, 5, 6];
// let output = { even: 0, odd: 0 };

// for(let key of input){
//     key % 2 == 0 ? output.even++ : output.odd++;
// }

// console.log(output);



// -------------------------- Question 17 ----------------------------------------------------
// const input = { a: 1, b: 2, c: 3 };
// const input2 = { b: 4, c: 5, d: 6 };

// let output = [];

// for (let key in input) {
//     if (key in input2) {
//         output.push(key);
//     }
// }

// console.log(output);


// ------------------------------ Question 18 -----------------------------------------------
// const input = [
//     { id: 1, name: "A" },
//     { id: 2, name: "B" }
// ];

// let output = {};

// for (let key in input) {
//     let obj = input[key];
//     output[obj.id] = obj;
// }
// console.log(output);


// -------------------------------- Question 19 ---------------------------------------------------
const input = { a: 1, b: "hello", c: 3 };
let allNumbers = true;

for(let key in input){
    if(typeof input[key] !== "number"){
        allNumbers = false;
        break;  // stop checking if one value is no number;
    }
}

console.log(allNumbers);