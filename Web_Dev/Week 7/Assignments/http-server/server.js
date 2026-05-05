const express = require("express");
const app = express();

app.use(express.json());

app.post('/create/todo', (req, res) => {
    
})

app.get('/todos', (req, res) => {

})

app.delete('todo', (req, res) => {

})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
})