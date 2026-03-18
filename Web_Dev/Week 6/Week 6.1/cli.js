const fs = require('fs');

const { Command } = require('commander');
const program = new Command();  //This indicates that commander is a class

program
    .name('string-util')
    .description('CLI to do file based texts')
    .version('0.8.0');

program.command('count')
    .description('Count the number of words in a file')
    .argument('<file>', 'file to count')
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) {
                console.log(err);
            } else {
                let words = 0;
                for (let i = 0; i < data.length; i++) {
                    if (data[i] == " ") {
                        words++;
                    }
                }
                console.log(`There are ${words + 1} words in ${file}`);
            }
        })
    })

program.parse(process.argv);

//NOTE -> if you want to change node index.js to worldcli -> use alias worldcli "node index.js"

