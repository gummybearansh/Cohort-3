const jwt = require("jsonwebtoken");
require("dotenv").config();

function userMiddleware(req, res, next) {
    const token = req.headers.token;

    try {
        const idDetails = jwt.verify(token, process.env.JWT_USER_PASSWORD)
        req.id = idDetails.id;
        next();
    } catch {
        res.status(403).json({
            msg: "Forbidden"
        })
    }

}

module.exports = {
    userMiddleware
}