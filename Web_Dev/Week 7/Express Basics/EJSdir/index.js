const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

// express internally requires ejs to no need to require ejs.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
    // res.send("This is root")
    res.render("home.ejs");
});

app.get("/home", (req, res) => {
    res.send("Hello")
});

app.get('/rolldice', (req, res) => {
    res.render("rolldice.ejs")
});

app.get("/ig/:username", (req, res) => {
    const instaData = require("./data.json");
    console.log(instaData);
    res.render("instagram.ejs");
});

app.all("/{*splat}", (req, res) => {
    res.status(404).send("<h1>Wrong page.</h1>");
});

const port = 8080;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})