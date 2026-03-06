const express = require("express");  //Express library return you a function and then you need to call that function.
const app = express();  // In this senario using (app) to call express function .

// route handlers
app.get('/', (req, res) => {
    // req -> all things related to the request
    res.send("Hello");  // send -> sends plain text data. This is only be sent once.
})                      // json -> sends some json data.

app.post('/', (req, res) => {
    res.send("Hello world from post endpoint");
})

app.get("/asd", (req, res) => {
    res.send("hello from the asd endpoint")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});   // ports