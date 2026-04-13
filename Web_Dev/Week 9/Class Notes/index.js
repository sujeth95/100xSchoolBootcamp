const express = require('express')
const app = express();

app.use(express.json());

const notes = []; //This is bad - eventually we'll learn about database (mongodb, postgres, mysql)
const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username);
    if(userExists) {
        return res.status(403).json({
            message: "User with this username already exists"
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


app.post("/signin", (req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);
    if(!userExists){
        res.status(403).json({
            message: "Incorrect credentials"
        })
        return;
    }

    
    
})

app.post('/notes', (req, res) => {
    const note = req.body.note;
    notes.push(note);

    res.json({
        message: "Done!"
    })
})


app.get("/notes", (req, res) => {
    res.json({
        notes
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/frontend/index.html");
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on ${PORT}`)
})