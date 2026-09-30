const express = require('express');
const { Pool } = require('pg');
require('dotenv').config({ quiet: true });
const pool = new Pool({
    connectionString: process.env.STRING
})

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // A VERY BAD WAY TO DO SQL USING PG --- THIS IS VULNERABLE TO SQL INJECTION
    // const response = await pool.query(`INSERT INTO users (username, email, password) VALUES ('${username}','${email}', '${password}') RETURNING id;`);
    const response = await pool.query(`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`, [username, email, password])
    // console.log(response);
    res.json({
        message: "Signup done",
        id: response.rows[0].id
    })
})

app.post("/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await pool.query(`SELECT * FROM users WHERE email='${email}' AND password='${password}'`);
    // console.log(response);

    const userExists = response.rows[0];

    if (!userExists) {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    } else {
        res.status(200).json({
            token: "2112jsalkflkljlkjlkjlkj"
        })
    }

})

const PORT = process.env.Port;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`)
})