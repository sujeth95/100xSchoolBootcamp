async function greet() {
    // throw "weak connection";  // for giving some error if you want.
    return "hello";
}

// greet() 
// .then((result) => {
//     console.log("Promise was resolved");
//     console.log(`result was : ${result}`);
// })
// .catch((err) => {
//     console.log(`Promise was rejected with err : ${err}`)
// })



//LEARNING ABOUT AWAIT KEYWORD.....
function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
}

demo();