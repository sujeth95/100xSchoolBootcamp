const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`standard GET response. Welcome ${user}`);
})

app.post("/register", (req, res) => {
    // console.log(req.body);
    let { user, password } = req.body;
    res.send(`standard POST response. Welcome ${user}, this is you password: ${password}`);
})

app.all("/{*splat}", (req, res) => {
    res.send("Page not found");
})

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`listening to port ${PORT}`);
});