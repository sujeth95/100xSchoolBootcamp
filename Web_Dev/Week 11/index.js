const express = require("express");
const app = express();
const { authMiddleware } = require("./middleware");
const jwt = require("jsonwebtoken");

app.use(express.json());
let CURRENT_USER_ID = 1;
let CURRENT_TODO_ID = 1;

let USERS = [];
let TODOS = [];

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
    } else {
        res.status(403).json({
            message: "User already exist"
        })
    }

    res.json({
        id: CURRENT_USER_ID - 1
    })
    console.log(USERS);

})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find(u => u.username === username && u.password === password);
    if (!existingUser) {

        return res.status(403).json({
            message: "User not found"
        })
    }
    const token = jwt.sign({
        userId: existingUser.id
    }, "sujeet123")


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

app.delete("/todo/:todoId", authMiddleware, (req, res) => {
    const userId = req.userId;
    const todoId = parseInt(req.params.todoId);

    const doesUserOwnTodo = TODOS.find(t => t.id === todoId && t.userId === userId);
    console.log(userId)
    console.log(todoId)
    if (doesUserOwnTodo) {
        TODOS = TODOS.filter(t => t.id !== todoId);
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

app.get("/todos", authMiddleware, (req, res) => {
    const userId = req.userId;
    const userTodos = TODOS.filter(t => t.userId === userId);
    res.json({
        todos: userTodos
    })
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port on ${PORT}`);
})