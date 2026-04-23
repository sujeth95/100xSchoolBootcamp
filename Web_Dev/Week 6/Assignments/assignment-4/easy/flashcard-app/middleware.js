const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        res.status(403).json({
            message: "You are not logged in"
        });
        return;
    }

    const decoded = jwt.verify({
        token
    }, "sujeet123")
    const username = decoded.username;

    if (username) {
        req.username = username;
        next();
    } else {
        res.status(403).json({
            message: "Invalid user"
        })
    }
}

module.exports = { authMiddleware }