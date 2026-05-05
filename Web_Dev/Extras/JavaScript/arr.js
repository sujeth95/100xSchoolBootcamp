// const arr = [1, 2, 3, 4, 5];

// for (const num of arr) {
//     console.log(num)
// }

// const greetings = "Hello World!"
// for(const greet of greetings){
//     console.log(`Each char is ${greet}`);
// }

// Maps...
// NOTE: Map itself is an Object and contains unique values.
const map = new Map()
map.set('IN', "India");
map.set('USA', "United States of America");

// console.log(map);

// USING ARRAY DESTRUCTURING....
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// USING FOR IN in array
// const programming = ["js", "rb", "py", "java", "cpp"]

// for(const key in programming){
//     console.log(programming[key]);
//     console.log(key);
// }


// USING HIGH ORDER FOR LOOP
const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach( (val) => {
    console.log(val);
})