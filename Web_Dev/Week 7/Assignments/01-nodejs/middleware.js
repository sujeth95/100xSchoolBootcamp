const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const token = req.headers.token;
    if(!token){
        res.status(403).json({
            message: "You are not logged in"
        })
        return;
    }

    const decoded = jwt.verify(token, "sujeet121");
    if (!decoded.username) {
        res.status(403).json({
            message: "Invalid token"
        })
    } else {
        req.username = username;
        next();
    }
}

module.exports = { authMiddleware }