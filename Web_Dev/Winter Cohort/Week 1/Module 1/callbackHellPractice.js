const fs = require('fs');
// Q1. Read contents of inputFile
// write contents of a converted to uppercase to outputFile
// let the calling function know when its done using a callback.
// use error first arguments

// function readFromAWriteToB(inputFile, outputFile, cb) {
//     fs.readFile(inputFile, "utf-8", (err, data) => {
//         if (err) {
//             cb("Error while reading first file");
//         } else {
//             fs.writeFile(outputFile, data.toUpperCase(), (err) => {
//                 if (err) {
//                     cb("Error while reading second file");
//                 } else {
//                     cb(null, "");  // This says no error have occured and we have nothing to return
//                 }
//             });
//         }
//     })
// }

// readFromAWriteToB("a.txt", "b.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("done!!");
//     }
// })


// Q2. Read the contents of a file, then wait for n seconds,
//  then write the contents back to the same file after converting 
// to upper case then wait for m seconds and then finish the async function

// function readTimer(n, m, path, cb) {
//     fs.readFile(path, "utf-8", (err, data) => {
//         if (err) {
//             cb("Error while reading the file");
//         } else {
//             setTimeout(() => {
//                 fs.writeFile(path, data.toUpperCase(), (err) => {
//                     if (err) {
//                         cb("Error while writing the file");
//                     } else {
//                         setTimeout(() => {
//                             cb(null, "");
//                         }, m);
//                     }
//                 });
//             }, n);
//         }
//     })
// }

// readTimer(1000, 2000, "a.txt", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("done!!");
//     }
// })


// Q3: Given a input file (a.txt) which has a bunch of paths and contents of files 
// write a function createCode(filePath) that reads the file and 
// creates new files/folders and puts the respective contents in them based on the input file
// Once all files have been written to, the callback should be called

/*
 Sample a.txt - 
 [{
    path: "./code/package.json",
    contents: "{name: "code-project"}"
 }, {
    path: "./code/index.js",
    contents: "console.log('hi there')":
 }]
 */

function createCode(filePath, cb) {
    fs.readFile(filePath, "utf-8", (err, data) => {
        const parsedData = JSON.parse(data);  //convert string into an object.
        let arrayLength = parsedData.length;
        let counter = 0;

        parsedData.forEach(({ path, contents }) => {
            fs.writeFile(path, contents, () => {
                counter++;
                if (counter == arrayLength) {
                    cb();
                }
            });
        })
    })
}

createCode("a.txt", (err, data) => {
    console.log("All data has been written.");
})