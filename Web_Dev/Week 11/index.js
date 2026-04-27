const express = require("express");
const app = express();
const { authMiddleware } = require("./middleware");
const jwt = require("jsonwebtoken");

app.use(express.json());
const CURRENT_USER_ID = 1;
const CURRENT_TODO_ID = 1;

const USERS = [];
const TODOS = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find(u => u.username === username);

    if (!existingUser) {
        USERS.push({
            id: CURRENT_USER_ID++,
            username,
            password
        })
        return;
    } else {
        res.status(403).json({
            message: "User already exist"
        })
    }

    res.json({
        id: CURRENT_USER_ID - 1
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find(u => u.username === password && u.password === password);

    if (existingUser) {
        const token = jwt.verify({
            userId: userExists.id
        }, "sujeet123")
    } else {
        res.status(403).json({
            message: "User not found"
        })
    }

    res.json({
        token
    })
})

app.post("/todo", authMiddleware, (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;

    TODOS.push({
        id: CURRENT_TODO_ID++,
        title,
        description,
        userId
    })
    res.json({
        message: "Todo made"
    })
})

app.delete("/todo/:todoId", (req, res) => {
    const userId = req.userId;
    const todo = parseInt(req.params.todoId);

    const doesUserOwnTodo = TODOS.find(t => t.id === todoId && t.userId === userId);

    if (doesUserOwnTodo) {
        TODOS = TODOS.filter(t => t.id === todoId);
        res.json({
            message: "Deleted"
        })

    } else {
        res.status(411).json({
            message: "Either todo doesn't exist or this is not your todo"
        })
    }
    // TODOS = TODOS.filter(t => t.userId === userId && t.id === todoId);

})

app.get("todos", authMiddleware, (req, res) => {
    const userId = req.userId;
    const userTodos = TODOS.find(t => t.userId === userId); 
    res.json({
        todos: userTodos
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port on ${PORT}`);
})