const express = require('express');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(cors());
// app.use(cors({
//     domains: [""]
// }))

app.post('/sum', (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

   res.send("This is a message");
})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})