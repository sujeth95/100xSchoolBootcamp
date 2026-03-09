const figlet = require("figlet");

figlet("Sujeet Oraon", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});