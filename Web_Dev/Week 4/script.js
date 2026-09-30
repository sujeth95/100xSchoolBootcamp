const fs = require("fs");

const fsReadFilePromisified = (filePath, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, encoding, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
}

const callback = (data) => {
    console.log(data);
}

const callbackErr = () => {
    console.log("error while reading the file");
}

fsReadFilePromisified("a.txt", "utf-8").then(callback).catch(callbackErr);

// fs.readFile("a.txt", "utf-8", callback);   //Callback approach


// NOTE:
// console.log('1: Script Start');

// setTimeout(() => {
//     console.log('2: Timeout (Macrotask)');
// }, 0);

// Promise.resolve().then(() => {
//     console.log('3: Promise (Microtask)');
// });

// console.log('4: Script End');