/*
  Write a function `findDuplicates` which takes an array as input and returns an array containing all the duplicate elements.

  What are duplicates?
  - Elements that appear more than once in the array are considered duplicates.

  Example:
  - Input: [10, 20, 30, 10, 40]
  - Output: [10]

  - Input: [1, 2, 3, 4, 5]
  - Output: []

  - Input: []
  - Output: []

  Once you've implemented the logic, test your code by running
  - `npm run test-duplicates`
*/


function findDuplicates(arr) {
  // return arr.filter((ele, index) => arr.indexOf(ele) !== index);
  let duplicate = [];

  for (let i = 0; i < arr.length; i++) {
    let alreadyAdded = false;

    for (let k = 0; k < duplicate.length; k++) {
      if (duplicate[k] === arr[i]) {
        alreadyAdded = true;
        break;
      }
    }
    if (alreadyAdded) {
      continue;
    }

    //check if same element appears again
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicate.push(arr[i]);
      }
    }
  }
  return duplicate;
}


// ANOTHER WAY OF FINDING DUPLICATES........
// const findDuplicates = (arr) => {
//   const seen = new Set();        // store numbers we have seen
//   const duplicates = new Set();  // stores duplicate numbers

//   for (let i = 0; i < arr.length; i++) {
//     if (seen.has(arr[i])) {
//       duplicates.add(arr[i]);       // already seen -> duplicate
//     } else {
//       seen.add(arr[i]);             // first time seeing it
//     }
//   }

//   return [...duplicates];          // convert Set -> array;
// }

module.exports = findDuplicates;

