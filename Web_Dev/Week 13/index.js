const express = require('express');
const { Pool } = require('pg');
const pool = new Pool({
    connectionString: ""
})

const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    console.log("INSERT INTO users (username, email, password) VALUES ('" + username + "','" + password + "','" + email + "')");
    await pool.query("INSERT INTO users (username, email, password) VALUES ('" + username + "','" + password + "','" + email + "')");

    res.json({
        message: "Signup done"
    })
})

const PORT = 
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})