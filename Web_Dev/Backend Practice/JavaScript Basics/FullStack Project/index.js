require('dotenv').config({ quiet: true });
const express = require('express');
const jwt = require('jsonwebtoken');

const { auth, logger } = require('./middleware');

const app = express();

app.use(express.json());
app.use(express.static('public'));

const users = [];


app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })
    console.log(users);
    res.json({
        message: "You are signed in"
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    let i = 0
    for (i; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        res.json({
            message: "Incorrect Credentials"
        })
        return;
    } else {
        const token = jwt.sign({
            username: users[i].username
        }, process.env.JWT_SECRET);

        res.header("jwt", token);

        res.json({
            token
        })
    }
})

app.get('/me', logger, auth, (req, res) => {
    const currentUser = req.username;

    const foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i] == currentUser) {
            foundUser = users[i]
        }
    }

    try {
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } catch(e) {
        res.status(404).json({
            message: "User not found"
        })
    }
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})