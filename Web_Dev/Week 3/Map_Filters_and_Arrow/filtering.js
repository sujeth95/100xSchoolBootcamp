// Filtering
// What if I tell u, given an input array, give me back all the even 
// values from it

// const arr = [1, 2, 3, 4, 5];
// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0){
//         newArray.push(arr[i])
//     }
// }

// console.log(newArray);

//Other method of filtering.
const arr = [1, 2, 3, 4, 5];

const ans = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(ans);


// Assignment: create a map function that takes an array and a transform 
// function as input and returns the transformed array as output