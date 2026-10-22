const fs = require('fs');

// CONCEPT OF CALLBACK HELL...
fs.readFile("a.txt", "utf-8", (err, a) => {
    if (err) {
        return console.log(err);
    }
    fs.writeFile("b.txt", a.toUpperCase(), (err) => {
        if (err) {
            return console.log(err);
        }
        fs.readFile("b.txt", "utf-8", (err, b) => {
            if (err) {
                return console.log(err);
            }
            console.log(b);
        });
    });
});