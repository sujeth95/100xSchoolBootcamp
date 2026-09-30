const express = require('express');
const app = express();

app.use(express.json());

let todos = [];

// Retrieving all todos items
app.get('/todos', (req, res) => {
    return res.status(200).json({
        todos
    })
})

// Retrieve a specific todo item by ID
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const existingId = todos.find((t) => t.id == id);

    if (existingId) {
        return res.status(200).json(existingId);
    } else {
        return res.status(404).json({
            error: "Not found"
        });
    }
})


// Create a new todo item
app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.random(Math.floor() * 10) + 1,
        title: req.body.title,
        description: req.body.description
    }

    todos.push(newTodo);

    return res.json({
        newTodo
    });
})


// Update an existing todo item by id
app.put('/todos/:id', (req, res) => {
    const id = req.params.id;

    const existingId = todos.findIndex((t) => t.id === id);

    return res.status(200).json({
        todos[existingId].title = req.body.title,
        
    })
})