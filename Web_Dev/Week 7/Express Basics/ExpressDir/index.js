const express = require("express");
const app = express();

// console.dir(app);

const PORT = 3000;  //8080 both can be used to create custom servers.

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello I am root");
});

// app.get("/:username/:id", (req, res) => {
//     console.log({ ...req.params });
//     res.send("hello, i am root");
// });

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    let htmlStr = `<h1>welcome to the page @${username}.</h1>`
    res.send(htmlStr);
});

app.get("/search", (req, res) => {
    console.log({ ...req.query });
    res.send("no result");
})

// app.get("/apple", (req, res) => {
//     res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//     res.send("you contacted orange path");
// });

// app.post('/', (req,res) => {
//     res.send("you sent a post request to root")
// });

app.all("/{*splat}", (req, res) => {       // sends specific errors. Always use this route at the end.
    res.status(404).send("this path does not exist");
});


// app.use((req, res) => {       //app.use listens to every request.
//     console.log("request recieved");
//     res.send({
//         name: "apple",
//         color: "red"
//     });
// });