// setTimeout

// // returns an object of the promise class
// function setTimeoutPromisified(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
//     // It is returning an object of the Promise class
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback);   //syntactically cleaner
// // let p = setTimeoutPromisified(3000) //returns object of the Promise class


// function waitFor3S(resolve) {
//     setTimeout(resolve, 3000)
// }

// function main() {
//     console.log("main is called")
// }

// waitFor3S(main);


// ---------------------------------
// function waitFor3S (resolve) {
//     setTimeout(resolve, 3000);
// }

// function setTimeoutPromisified() {
//     return new Promise(waitFor3S);
// }

// function main() {
//     console.log("main is called");
// }

// setTimeoutPromisified().then(main);

// -----------------------------------------
// function random(resolve) {   //resolve is also a function
//     resolve();    //whenever this (resolve()) gets called whatever .then() have passed on gets called.
// }

// let p = new Promise(random);  // supposed to return you something eventually

// // using the eventual value returned by the promise
// function callback() {
//     console.log("Promise succeded")
// }
// p.then(callback);


// --------------------------------------
// // WRITTEN BY OWN
// const promisified = () => {
//     return new Promise(resolve => setTimeout(resolve, 3000));
// }

// const callback = () => {
//     console.log("Promise successful");
// }

// promisified().then(callback);

// --------------------------------------------------------
// const fs = require("fs");

// function readTheFile (sendTheFileValueHere) {
//     // do your thing, whenever you have the final value, call sendTheFileValueHere("finalValue");
//     fs.readFile("a.txt", "utf-8", function (err, data) {
//         sendTheFileValueHere(data);
//     })
// }

// function readFile(fileName) {
//     // read the file and return its value
//     return new Promise(readTheFile);   //give me a function that is actually doing the async task.
// }

// const p = readFile();

// function callback(contents) {
//     console.log(contents);
// }
// p.then(callback)

// ---------------------------------------------------

// const fs = require('fs');

// function readFile(fileName){
//     return new Promise(sendTheFinalValueHere => {
//         fs.readFile("a.txt", "utf-8", (err, data) => {
//             sendTheFinalValueHere(data);
//         })
//     })
// }

// const callback = (contents) => {
//     console.log(contents);
// }

// readFile().then(callback);

// --------------------------------------------------------
// PROMISIFIED version of fs.readFile()
const fs = require('fs');
console.log("First call");

const readFile = (fileName) => {
    return new Promise(sendTheFinalValueHere => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            sendTheFinalValueHere(data);
        })
    })
}

const callback = (contents) => {
    console.log(contents);
}

readFile("a.txt").then(callback);

if (true) {
    for (let i = 0; i < 10; i++) {
        if (i == 9){
            break;
        }
    }
    console.log("Second call");
}

console.log("Last call");


// -------------------------------------------------------
// PROMISIFIED version of setTimeout
// console.log("First call");

// const setTimeoutPromisified = (ms) => {
//     return new Promise(data => setTimeout(data, ms))
// }

// const callback = () => {
//     console.log("Promise succeded.")
// }

// setTimeoutPromisified(1000).then(callback);

// if (true) {
//     for (let i = 0; i < 10; i++) {
//         if (i == 9){
//             break;
//         }
//     }
//     console.log("Second call");
// }

// console.log("Last call");

// NOTE: this conclude to this point that I/O operations are expensive operation than loops
// async operations helps in reducing idle-ation of CPU.
// and promise helps in managing callback hell.