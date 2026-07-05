import 'dotenv/config';
// require('dotenv').config({ quiet: true });

import express from 'express';
const app = express();

app.get("/", (req, res) => {
    res.send('Server is ready')
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
});