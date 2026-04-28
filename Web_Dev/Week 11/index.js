require("dotenv").config({ quiet: true });

const express = require("express");
const app = express();
const { authMiddleware } = require("./middleware");
const { todoModel, userModel } = require("./models");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// NOTE: Reading writing from database using backend is an async. operation.

mongoose.connect(process.env.MONGODB_URI);
app.use(express.json());
// let CURRENT_USER_ID = 1;
// let CURRENT_TODO_ID = 1;

// let USERS = [];
// let TODOS = [];

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // const existingUser = USERS.find(u => u.username === username);
    const existingUser = await userModel.findOne({
        username,
        password
    });

    if (existingUser) {
        res.status(403).json({
            message: "User already exist"
        })
        return;
    }

    const newUser = await userModel.create({
        username,
        password
    })

    res.json({
        id: newUser._id
    })


})

app.post("/signin", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // const existingUser = USERS.find(u => u.username === username && u.password === password);
    const existingUser = await userModel.findOne({
        username,
        password
    });
    if (!existingUser) {

        return res.status(403).json({
            message: "User not found"
        })
    }
    const token = jwt.sign({
        userId: existingUser.id
    }, process.env.JWT_SECRET)

    res.json({
        token
    })
})

app.post("/todo", authMiddleware, (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    const description = req.body.description;

    todoModel.create({
        title,
        description,
        userId
    })
    res.json({
        message: "Todo made"
    })
})

app.delete("/todo/:todoId", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const todoId = req.params.todoId;

    // const doesUserOwnTodo = TODOS.find(t => t.id === todoId && t.userId === userId);
    const doesUserOwnTodo = await todoModel.find({
        userId
    })
    if (doesUserOwnTodo) {
        await todoModel.deleteOne({
            _id: todoId
        })
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

app.delete("/users/:usersId", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const usersId = req.params.usersId;

    const doesUserExist = await userModel.findOne({
        _id: userId
    })

    if (doesUserExist) {
        const deleteUser = await userModel.deleteOne({
            _id: usersId
        })
        res.json({
            message: "user deleted"

        })
        if (deleteUser) {
            await todoModel.deleteMany({
                userId: usersId
            })
        }
    } else {
        res.status(403).json({
            message: "Unauthorized user"
        })
    }

})

app.get("/todos", authMiddleware, async (req, res) => {
    const userId = req.userId;
    // const userTodos = TODOS.filter(t => t.userId === userId);

    const userTodo = await todoModel.find({
        userId
    })
    res.json({
        todos: userTodo
    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Port on ${PORT}`);
})