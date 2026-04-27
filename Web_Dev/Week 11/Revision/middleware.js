const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.headers.token;

    const decoded = jwt.verify(token, "sujeet123");

    if(decoded.userId){
        req.userId = parseInt(decoded.userId)
        next();
    } else {
        res.status(411).json({
            message: "Token invalid"
        })
    }
}

module.exports = { authMiddleware }