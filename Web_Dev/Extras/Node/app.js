// const os = require('os');

// // info about current user
// const user = os.userInfo();
// console.log(user);

// // method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()} seconds`);

// PATH MODULE....
const path = require('path');

console.log(path.sep);      //Separator

const filePath = path.join(__dirname + "/content/subfolder/test.txt") //joining files path
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname + '/content/subfoler/test.txt');
console.log(absolute);