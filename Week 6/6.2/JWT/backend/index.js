const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const JWT_SECRET = "VERYSECURESECRETDON'tSHAREWITHANYONE"
const app = express();

app.use(express.json());
app.use(cors());

function authMiddleware(req, res, next){
    const token = req.headers.authorization;
    console.log(token);
    try {
        const userDetails = jwt.verify(token, JWT_SECRET);
        req.username = userDetails.username;
        console.log("Authentication successfull");
        next(); 
    } catch (e){
        console.log("Authentication unsuccessfull");
        return res.status(404).json({
            msg: "Page not found (actually not authenticated)"
        })
    }
}

const users = [];

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // when key and value are same, can use shorthand notation
    const newUser = {
        username, 
        password
    }    

    users.push(newUser);

    console.log("new user added");
    console.log(users);

    res.status(200).json({
        msg: "User added successfully"
    })
})

app.post ('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = users.find((user) => user.username == username && user.password == password)
    
    if (foundUser){
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        console.log("User Found")
        console.log(token);
        res.status(200).json({
            msg: "Authentication Successfull", 
            token
        })
    } else {
        console.log("User not found");
        res.status(404).json({
            msg: "Invalid username or password"
        })
    }
})

app.get('/me', authMiddleware, (req, res) => {
    // const user = users.find(u => u.username == req.username);
    res.status(200).json({
        msg: `You have been successfully authenticated ${req.username}`,
        // username: user.username,
        // password: user.password
    })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})
