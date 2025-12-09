const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

function auth(req, res, next){ 
    const token = req.headers.token;
    try {
        const idDetails = jwt.verify(token, JWT_SECRET);
        req.id = idDetails.id;  
        next();
    } catch (e){
        res.status(403).json({
            message: "Please login"
        })
        return;
    }
}

module.exports = {
    auth
}