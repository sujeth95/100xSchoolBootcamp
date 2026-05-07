const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.use(express.json());
let USERS = [];
let TODOS = [];

// USER SIGNUP ROUTE
app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find((e) => e.username === username);

    if (existingUser) {
        res.status(403).json({
            message: "User already exists"
        })
    } else {
        USERS.push({
            username,
            password
        })
        res.json({
            message: "User signed up"
        })
    }
    console.log(USERS);
})

// USER SIGNIN ROUTE
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find((e) => e.username === username && e.password === password);

    if (existingUser) {
        const token = jwt.sign({
            username
        }, "sujeet121")
        res.json({
            token,
            message: "User signed up"
        })
    } else {
        res.status(403).json({
            message: "Invalid credentials"
        })
    }
})

// ACCESSING ALL TODOS.
app.get("/todos", (req, res) => {
    res.json({
        TODOS
    })
})

// ACCESSING A TODO WITH SPECIFIC ID.
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const existingTodo = TODOS.find((e) => e.id === id);
    if (!existingTodo) {
        res.status(404).json({
            message: "Todo not found"
        })
        return;
    }
    res.json({
        id: existingTodo.id,
        title: existingTodo.title,
        description: existingTodo.description
    })
})

// CREATING A TODO
app.post("/todos", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const existingTodo = TODOS.find((e) => e.title === title && e.description === description);

    if (existingTodo) {
        res.status(403).json({
            message: "Your todo already exist"
        })
        return;
    }
    function randomId(todos) {
        let id;
        do {
            id = Math.floor(Math.random() * 10) + 1;
        } while (TODOS.some(t => t.id === id))
        return id;
    }
    const newId = parseInt(randomId(TODOS));

    TODOS.push({
        id: newId,
        title,
        description
    })
    console.log(TODOS);
    res.json({
        message: "TODO created"
    })
    return;

})

// UPDATING A TODO WITH SPECIFIC ID
app.put("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const title = req.body.title;
    const description = req.body.description;

    const existingTodo = TODOS.find(e => e.id === id);
    if (existingTodo) {
        existingTodo.title = title;
        existingTodo.description = description;

        res.json({
            id: existingTodo.id,
            title: existingTodo.title,
            description: existingTodo.description,
            message: "Todo Updated"
        })
        return;
    } else {
        res.status(404).json({
            message: "You don't have a todo with this id"
        })
        return;
    }
})

// DELETING TODO WITH SPECIFIC ID.
app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const existingTodo = TODOS.find(e => e.id === id);
    
    if(existingTodo){
        TODOS = TODOS.filter(e => e.id !== id);
        res.json({
            TODOS, 
            message: "Todo Deleted"
        })
    } else {
        res.status(404).json({
            message: "Todo not found"
        })
    }

})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})