const express = require('express');
const app = express();

let todos = [];
// store the data in a file, foundation for database
// add user logic

app.post('/', (req, res) => {
    // create a random id for the todo
    // extract the todo title from the body
    todos.push({
        title,
        id
    })
})

app.delete('/', (req, res) => {
    //extract the todo id
    //remove the todo from here
})

app.get('/', (req, res) => {
    res.json({
        todos
    })
})


const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server listening on Port ${PORT}`);
});