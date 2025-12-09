const jwt = require("jsonwebtoken");
require("dotenv").config();

function adminMiddleware(req, res, next) {
    const token = req.headers.token;

    try {
        const idDetails = jwt.verify(token, process.env.JWT_ADMIN_PASSWORD)
        req.id = idDetails.id;
        next();
    } catch (e) {
        res.status(403).json({
            msg: "Forbidden"
        })
    }

}

module.exports = {
    adminMiddleware
}