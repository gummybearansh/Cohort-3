const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next){
    const token = req.headers.token;

    try {
        const idDetails = jwt.verify(token, JWT_SECRET);
        // what's being signed has the iat as well
        req.id = idDetails.id;
        next();
    } catch (e){
        // console.log(e);
        res.status(403).json({
            message: "Requires Login"
        })
    }
}

module.exports = {
    auth
}