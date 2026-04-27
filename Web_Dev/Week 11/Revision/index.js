const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");

app.use(express.json());

let CURRENT_USER_ID = 1;
let CURRENT_TODO_ID = 1;

let USERS = [];
let TODOS = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find(u => u.username === username);

    if (existingUser) {
        res.status(403).json({
            message: "User already exists"
        })
    }

    USERS.push({
        id: CURRENT_USER_ID++,
        username,
        password
    })

    res.json({
        id: CURRENT_USER_ID - 1,
        message: "User signed up"
    })
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = USERS.find(u => u.username === username && u.password === password);

    if (!existingUser) {
        res.status(403).json({
            message: "User not found"
        })

    }

    const token = jwt.sign({
        userId: existingUser.id
    }, "sujeet123");

    res.json({
        token
    })

})

app.post("/todo", authMiddleware, (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;

    const existingPost = TODOS.find(u => u.title === title && u.description === description);

    if (existingPost) {
        res.status(403).json({
            message: "todo already exists"
        })
        return;
    }

    TODOS.push({
        id: CURRENT_TODO_ID++,
        title,
        description,
        userId
    })

    res.json({
        message: "Todo Created"
    })


    console.log(TODOS);
})

app.get("/todos", authMiddleware, (req, res) => {
    const userId = req.userId;
    const usersTodo = TODOS.filter(t => t.userId === userId);
    res.json({
        todos: usersTodo
    })
})

app.delete("/todo/:todoId", authMiddleware, (req, res) => {
    const userId = req.userId;
    const todoId = parseInt(req.params.todoId);

    const doesTheUserHaveTodo = TODOS.find(u => u.userId === userId && u.id === todoId);

    if (doesTheUserHaveTodo) {
        TODOS = TODOS.filter(u => u.id !== todoId);

        res.json({
            message: "Deleted"
        })
    } else {
        res.status(411).json({
            message: "Either the token is invalid or the user have no access to this todo"
        })
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port on ${PORT}`);
})