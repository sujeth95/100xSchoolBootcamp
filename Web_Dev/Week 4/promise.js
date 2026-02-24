// const fs = require("fs");

// function afterFileIsRead(err, contents) {
//     console.log(contents);
// }

// fs.readFile("a.txt", "utf-8", afterFileIsRead)

//---------Promisified Function------------------
// function setTimeoutPromisified(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }

// function callback() {
//     console.log("hii There");
// }

// setTimeoutPromisified(3000).then(callback);    //considered traditionally a better synatx

const fs = require("fs");

function fsReadFilePromisified(filePath, encoding, callback) {
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

function callbackFn(data) {
    console.log(data);
}

function callbackErr(){
    console.log("error whiile reading the file.");
}

fsReadFilePromisified("a.txt", "utf-8")
.then(callbackFn)
.catch(callbackErr);

// fs.readFile("a.txt", "utf-8", callbackFn);