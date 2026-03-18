const express = require("express");
const app = express();

// //define all of your route handlers
// app.get("/", (req, res) => {
//     // req -> all things related to the request.
//     res.send("Hello World"); //send -> to send HTML data
// });                          // json -> to send json data

// app.post("/", (req, res) => {
//     res.send("Hello World from post endpoint.");
// })

let todos = [];
// store the data in a file, foundation for database.
// add user logic

app.post('/', (req, res) => {
    // create a random id for the todo
    //extract the todo tilte from the body
    todos.push({
        title,
        id
    })
});

app.delete('/', (req, res) => {
    //extract the todo id
    //remove the todo from here
});

app.get('/', (req, res) => {
    res.json({
        todos
    })
})

const PORT = 3000;      //which port
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
});