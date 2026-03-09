const apple = require("./apple");
const banana = require("./banana");
const orange = require("./orange");

let fruits = [apple, banana, orange];
// index.js must be the file name to export multiple file to another directory.
module.exports = fruits;