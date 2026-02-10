function sumArray(users) {
  let arrayOfSum = [];
  let sum = 0;

  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i]; j++) { 
      sum = sum + users[j];
    }
    arrayOfSum.push(sum);
  }
  return arrayOfSum;
}

const users = [{
  food: [10, 20, 30],
  travel: [5, 15],
  bills: [40, 60]
}]

console.log(sumArray(users));


// function getFields(input, field) {
//     var output = [];
//     for (var i=0; i < input.length ; ++i)
//         output.push(input[i][field]);
//     return output;
// }

// objArray = [ { foo: 1, bar: 2}, { foo: 3, bar: 4}, { foo: 5, bar: 6} ];
// var result = getFields(objArray, "foo"); // returns [ 1, 3, 5 ]

// console.log(result);