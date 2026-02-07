// Filtering
// What if I tell u, given an input array, give me back all the even 
// values from it

const arr = [1, 2, 3, 4, 5];
let newArray = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0){
        newArray.push(arr[i])
    }
}

console.log(newArray);