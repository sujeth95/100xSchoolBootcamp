// checking if an object is empty or not
const emptyObj = {}
if (Object.keys(emptyObj).length == 0) {
    console.log("object is empty");
}


// checking if an array is empty or not
const emptyArr = [];
if (emptyArr.length == 0){
    console.log("Array is empty");
}

// NOTE:
// false == 0 -> true
// false == '' -> true
// 0 == '' -> true

// Nullish coalescing operator (??) : null , undefined

// NOTE: First value gets assigned.
// let val1;
// val1 = 5 ?? 10 


// TERNIARY OPERATOR
// condition ? true : false
// EXAMPLE:
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")