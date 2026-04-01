const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.log("error while reading the file");
    } else {
        console.log(data);
    }
});

const file = fs.readFileSync("a.txt", "utf-8");
console.log(file, "Synchoronous fn");

for (let i = 1; i < 5; i++) {
    console.log(i);
}


// using trim method to trim in a file.......
// using SYNC function

// let contents = fs.readFileSync("a.txt", "utf-8");
// const trimmedContents = contents.trim();
// fs.writeFileSync("d.txt", trimmedContents);

// USING ASYNC function
// const cleanFile = (filePath, cb) => {
//     fs.readFile(filePath, "utf-8", (err, contents) => {
//         const trimmedContents = contents.trim();
//         fs.writeFile("a.txt", trimmedContents, () => {
//             cb();
//         });
//     });
// }

// cleanFile("a.txt", () => {
//     console.log("done cleaning a.txt");
// });



// Promisified version of callback

const cleanFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf-8", (err, contents) => {
            if (err) {
                reject(err);
            } else {
                const trimmedContents = contents.trim();
                fs.writeFile("a.txt", trimmedContents, (err) => {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            }
        });
    })
}

// cleanFile("a.txt")
//     .then(() => {
//         console.log("file has been cleaned");
//     })
//     .catch(() => {
//         console.log("error while cleaning file");
//     })

// CALLING FUNCTION USING ASYNC AWAIT
async function main() {
    try {
        await cleanFile("aaa.txt");
        console.log("done cleaning the file");
    } catch (e) {
        console.log("error while cleaning the file");
    }
}

main();