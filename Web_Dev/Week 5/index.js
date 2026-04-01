const fs = require("fs");

// fs.readFile("a.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.log("error while reading file")
//     } else {
//         console.log(data);
//     }
// });

const p = new Promise((resolve, reject) => resolve);
// console.log(p);


// Q1. Create a promisified version of fs.readFile 
const fsReadFilePromise = (fileName, encoding) => { // doesnot takes callback as a function
    return new Promise((resolve, reject) => {        // promise takes a function as an input
        fs.readFile(fileName, encoding, (err, data) => {    // but the function itself takes two arguments which are function.
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

// CALLING THE PROMISIFIED VERSION OF FS.READFILE
// fsReadFilePromise("a.txt", "utf-8")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((e) => {
//         console.log(e);
//     })



// Q2. Create a promisified version of setTimeout

// My version... 
// const setTimeoutPromisified = (delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(delay, (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
// }

// Teacher version.......
const setTimeoutPromisified = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(delay);
        }, delay)
    })
}

setTimeoutPromisified(1000)
    .then((data) => {
        let sec = data / 1000;
        console.log(`${sec} second has passed.`);
    })

// NOTE: Whenever we use database calls and network calls we use promises.



// WRITING OWN PROMISES
function fsReadFilePromisified(filePath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject('Something went wrong');
            } else {
                resolve(data);
            }
        })
    })
}

async function main() {
    // NOT A GOOD WAY OF WRITING 

    // fsReadFilePromisified("a.txt", "utf-8")
    //     .then((data) => {
    //         console.log(data);
    //         fsReadFilePromisified("b.txt", "utf-8")
    //             .then((data) => {
    //                 console.log(data);
    //                 fsReadFilePromisified("c.txt", "utf-8")
    //                     .then((data) => {
    //                         console.log(data);
    //                     })
    //                     .catch((err) => {
    //                         console.log(err);
    //                     })
    //             })
    //             .catch((err) => {
    //                 console.log(err);
    //             })
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })


    //USING ASYNC AWAIT FOR EFFICIENCY...
    let file1Contents = await fsReadFilePromisified("a.txt", "utf-8");  //these are async calls
    let file2Contents = await fsReadFilePromisified("b.txt", "utf-8");
    let file3Contents = await fsReadFilePromisified("c.txt", "utf-8");

    // console.log(file1Contents);
    // console.log(file2Contents);
    // console.log(file3Contents);

}

main();


// Write a promisified function that takes a file prefix as an input (a)
// and cleans ({prefix}1.txt), {prefix}2.txt, {prefix}3.txt

// NOTE: Always start with calling a function.

const cleanFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, contents) => {
            if(err) {
                reject();
            } else {
                const trimmedContents = contents.trim();
                fs.writeFile(filePath, trimmedContents, (err) => {
                    if(err) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            }
        });
    })
}

const cleanManyFiles = (prefix) => {
    return new Promise(async (resolve, reject) => {
        try {
            await cleanFile(prefix + "1.txt");
            await cleanFile(prefix + "2.txt");
            await cleanFile(prefix + "3.txt");

            resolve();
        }
        catch (e) {
            reject(e);
        }
    })
}

cleanManyFiles("a")
    .then(function () {
        console.log("all 3 files have been cleaned")
    })
    .catch(function () {
        console.log("error while cleaning these 3 files")
    })