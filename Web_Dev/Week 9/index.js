const express = require("express");

const app = express();
const notes = []

app.post('/', (req, res) => {
    
})

const PORT = 3300;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})