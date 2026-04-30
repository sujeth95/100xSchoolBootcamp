const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.token;

    if (!token) {
        res.status(403).send({
            message: "You are not logged in"
        });
        return;
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    if (!userId) {
        res.status(403).json({
            message: "Incorrect token"
        });
        return;
    }

    req.userId = userId;  // attaching userId with request

    next();
}

module.exports = { authMiddleware }