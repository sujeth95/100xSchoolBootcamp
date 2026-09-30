// Creating a trello like application
require("dotenv").config({ quiet: true });
const express = require("express");
const app = express();
const { userModel, organizationModel } = require("./models")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

mongoose.connect(process.env.MONGO_DB);
app.use(express.json());

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await userModel.findOne({
        username
    })

    if (existingUser) {
        res.status(403).json({
            message: "User already exists"
        })
        return;
    }

    const newUser = userModel.create({
        username,
        password
    })

    res.json({
        id: newUser.id,
        message: "User signed up"
    })

})

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = userModel.findOne({
        username,
        password
    })

    if (!existingUser) {
        res.status(403).json({
            message: "Invalid credentials"
        })
        return;
    }

    const token = jwt.sign({
        userId: existingUser.id
    }, process.env.JWT_SECRET)

    res.json({
        token
    })
})


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})