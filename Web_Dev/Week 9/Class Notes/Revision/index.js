const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
const notes = [];
const users = []; // contains array of objects, not array of strings.

app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(403).json({
            message: "User already exists"
        })
    }

    users.push({
        username,
        password
    })

    res.json({
        message: "You have signed up"
    })

    console.log(users);
})

app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);
    if (!userExists) {
        res.status(403).json({
            message: "Incorrect credentials"
        })
        return;
    }

    const token = jwt.sign({
        username
    }, "sujeet123");
    res.json({
        token: token
    })
    console.log(token);
})

// POST - Create a note -- AUTHENTICATED ENDPOINT
app.post("/notes", function (req, res) {
    // Check if they have sent the right header, extract who this user is from the header.
    const token = req.headers.token;

    if (!token) {
        res.status(403).send({
            message: "You are not logged in"
        });
        return;
    }

    const decoded = jwt.verify(token, "sujeet123");
    const username = decoded.username;

    if (!username) {
        res.status(403).json({
            message: "malformed token"
        })
        return;
    }

    const note = req.body.note;
    notes.push({ note, username });

    res.json({
        message: "Done!"
    })

    console.log(notes);
})

// GET - get all my notes -- AUTHENTICATED ENDPOINT
app.get("/notes", function (req, res) {
    const token = req.headers.token;

    if (!token) {
        res.status(403).send({
            message: "You are not logged in"
        })
        return;
    }

    const decoded = jwt.sign(token, "sujeet123");
    const username = decoded.username;

    if (!username) {
        res.send(403).json({
            message: "token invalid"
        })
        return;
    }

    const userNotes = notes.filter(note => note.username === username);
    res.json({
        notes: userNotes
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html")
})

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/frontend/signup.html");
})

app.get("/signin", (req,res) => {
    res.sendFile(__dirname + "/frontend/signin.html");
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})