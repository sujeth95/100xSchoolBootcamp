// array

// const myArr = [0, 1, 2, 3, 4, 5];
// const myArr1 = [0, 1, 2, 3, 4, 5];

// // USING SPREAD TO MERGE TWO ARRAYS
// const all_new_Array = [...myArr, ...myArr1];
// console.log(all_new_Array);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// OBJECT LITERALS
// const jsUser = {
//     name: "sujeet"
// }

// FUNCTIONS........    

function one() {
    const username = "sujeet"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    console.log(website);
    two();
}
one();