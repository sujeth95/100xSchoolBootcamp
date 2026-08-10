import express from 'express';
const app = express();

app.use(express.json());



let todoCount = 1;

let todos = [];
// let todos = [{
//     title: "Demo Title",
//     description: "Demo Description"
// },
// {
//     title: "Demo title 2",
//     description: "Demo description 2"
// }];

app.get('/', function (req, res) {
    res.status(200).send("Hello World");
    return;
});

app.post('/create/todo', (req, res) => {
    // const { title, description } = req.body;
    const title = req.body.title;
    const description = req.body.description;

    todos.push({
        title,
        description,
        id: todoCount++
    })

    res.status(200).json({
        title: title,
        description: description,
        id: todoCount--
    })
})


app.get('/todos', (req, res) => {
    try {
        res.status(200).json({
            todo: todos
        })
        return;
    } catch (err) {
        res.status(404).json({
            message: "Todos not found"
        })
        return;
    }

    // const getTodoTitle = todos.find(todos.title === title && todos.description === description);
    // console.log(getTodoTitle);
    // if (getTodoTitle) {
    //     res.send(200).json({
    //         title: getTodoTitle.title,
    //         description: getTodoTitle.description
    //     })
    // } else {
    //     res.send(404).json({
    //         message: "Todo not found"
    //     })
    // }
})


app.get('/todo', (req, res) => {
    const id = parseInt(req.query.id);

    if (id) {
        res.status(200).json({
            id
        })
        return;
    }
    else {
        res.status(404).json({
            "error": "Todo not found"
        })
        return;
    }
})


app.delete('/todo', (req, res) => {
    const id = parseInt(req.query.id);

    if(id){
        const deleteId = todos.filter(id);
        res.status(200).json({
            id: deleteId
        })
        return;
    }
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});