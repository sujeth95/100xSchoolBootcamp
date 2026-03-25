let nums = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let result = nums.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});

// console.log(result);

// Printing max using for loop
let max = -1;
for (let i = 0; i < nums.length; i++) {
    if (max < nums[i]) {
        max = nums[i];
    }
}

// console.log(max);

//Spread with Object Literals....
let data = {
    email: "iron@gmail.com",
    password: "abcd"
};

let dataCopy = { ...data, id: 123 };
// console.log(data);
// console.log(dataCopy);

let arr = [1, 2, 3, 4, 5];
let obj1 = { ...arr };
// console.log(obj1);


// Reduce methods........
function sum(...args) {
    // arguments
    for (let i = 0; i < args.length; i++) {
        console.log("You gave us: ", args[i]);
    }
}