// http server that supports 4 routes (/sum, /sub, /div, /mul)
// express, hono, elysiajs, trpc --> HTTP servers.

const express = require("express");
const app = express();


app.get("/", (req, res) => {
    // Req -> Domains, ips, routes, methods, body, request headers, query params, path params everything will be handled by this.
    // Res => Payload, status code, response header everything will be handled by this.

    // res.send("<html><h2>Welcome to the Calculator app.</h2></html>");
    res.sendFile(__dirname + "/index.html");
})

// USING QUERY PARAMETER
app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);  //NOTE: By default a is a string, we parse it to an integer.
    const b = parseInt(req.query.b);  //NOTE: By default b is a string, we parse it to an integer.

    let sum = a + b;

    res.json({
        ans: sum
    })
    console.log(`The sum is : ${sum} in QUERY Pfffarams.`)

    // res.send("<b><u> " + sum.toString() + "</u></b>") //Returns HTML or Plain text

})

// USING PATH PARAMETER
app.get("/sum/:firstNumber/:secondNumber", (req, res) => {
    const a = parseInt(req.params.firstNumber);
    const b = parseInt(req.params.secondNumber);

    let sum = a + b;

    res.json({
        ans: sum
    })

    console.log(`The sum is : ${sum} in PATH Parameter`)
})

app.get('/multiply/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    let ans = a * b;

    res.json({
        ans
    })
    console.log(`The multiple is: ${ans} in PATH Params`)
})


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Running on ${PORT}.`)
})