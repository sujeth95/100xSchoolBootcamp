// map, filters and arrow functions

// Normal method to write functions.

// function sum(a,b){
//     return a + b;
// }

// arrow function
// const sum = (a, b) => {
//     return a + b
// }
// const ans = sum(1, 2);
// console.log(ans);

// Given an array, give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

// const input = [1, 2, 3, 4, 5];
// const newArray = [];

// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);

// other solution
// const input = [1, 2, 3, 4, 5];
// function transform(i){
//     return i * 2;
// }

// const ans = transform(2);
// console.log(ans);

// const ans = input.map(transform);
// console.log(ans);

//other ways to writing maps

const input = [1, 2, 3, 4, 5];

const ans = input.map(function (i) {
    return 2 * i;
});
console.log(ans);


// Assignment: Create a map function that takes 2 inputs an array,
// and a transformation callback/fn and transforms the array into
// a new one using the transform fn.
