const express = require("express");
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

    

})

// POST - Create a note
app.post("/notes", function (req, res) {
    const note = req.body.note;
    notes.push(note);

    res.json({
        message: "Done!"
    })
})

// GET - get all my notes
app.get("/notes", function (req, res) {
    res.send({
        notes
    })
})

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html")
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})