const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const header = req.headers.token;
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);

    try {
        req.username = decodedData.username;
        next();
    } catch (e) {
        res.json({
            message: "You are not logged in"
        })
    }

    console.log("Middleware Running")
}

const logger = (req, res, next) => {
    console.log(`${req.method} request method`);
    next();
}

module.exports = { auth, logger }