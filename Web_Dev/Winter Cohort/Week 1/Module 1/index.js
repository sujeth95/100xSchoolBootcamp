const fs = require('fs');

console.log("1. Start");

fs.readFile("a.txt", "utf-8", (err,data) => {
    if(err){
        console.log(err);
    } else {
        console.log(data);
    }
});

console.log("2. End");