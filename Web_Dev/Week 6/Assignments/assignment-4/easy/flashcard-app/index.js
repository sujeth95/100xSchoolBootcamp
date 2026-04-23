const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("./middleware");

app.use(express.static('public'));
app.use(express.json());

const users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(u => u.username === username);

    if (userExists) {
        res.status(403).json({
            message: "User already exists"
        })
        return;
    }

    users.push({
        username, password
    })

    res.json({
        message: "You have signed up"
    })

    console.log(users);
})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(u => u.username === username && u.password === password);

    if (!userExists) {
        res.status(403).json({
            message: "User doesnot exist"
        });
        return;
    }

    const token = jwt.sign({
        username
    }, "sujeet123")

    res.json({
        token
    })
})

app.post("/topics", authMiddleware, (req, res) => {
    const username = req.username;


})

app.post("/questions", authMiddleware, (req, res) => {
    const username = req.username;

})

app.post("/flashCard", authMiddleware, (req, res) => {
    const username = req.username;

})

app.post("results", authMiddleware, (req, res) => {
    const username = req.username;

})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + "/frontend/signup.html");
})

app.get('/signin', (req, res) => {
    res.sendFile(__dirname + "/frontend/signin.html");
})

app.get('/topics', (req, res) => {
    res.sendFile(__dirname + "/frontend/topics.html");
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port on ${PORT}`);
})