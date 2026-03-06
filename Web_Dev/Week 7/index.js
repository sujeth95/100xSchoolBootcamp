const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile("/d/Harkirat Web Development/100xSchoolBootcamp/Web_Dev/Week 7/index.html");
})

app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a + b;
    res.json({
        ans: sum
    })
})

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})