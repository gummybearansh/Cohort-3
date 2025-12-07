const express = require("express");
const app = express();

app.use(express.json());

// this is an interesting funciton 
// function generates a random 8 letter string
const STRLEN = 32;
function generateToken(STRLEN){
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+=-`~";
    let result = '';
    for (let i = 0; i < STRLEN; i++){
        // pick a random index from the characters string 
        result += characters.charAt(Math.floor((Math.random() * characters.length)))
    }
    return result;
}

const users = [];

app.post('/signup', (req, res) => {
    const newUser = {
        username: req.body.username,
        password: req.body.password,
    };

    users.push(newUser);

    res.json({
        success: true,
        msg: "New Signup Confirmed",
        users: users
    })
})

app.post('/signin', (req, res) => {
    const enteredUsername = req.body.username;
    const enteredPassword = req.body.password;
    
    let foundUser = null;
    for (let i = 0; i < users.length; i++){
        if (users[i].username == enteredUsername && users[i].password == enteredPassword){
            foundUser = users[i];
        }
    }
    if (foundUser){
        foundUser.token = generateToken(STRLEN);
        res.status(200).json({
            success: true,
            msg: "Authentication Successfull", 
            token: foundUser.token
        })

    } else {
        res.status(404).json({
            success: false,
            msg: "Invalid Username or passowrd"
        })
    }
})

app.get('/me', (req, res) => {
    // need to confirm if user is authenticated
    // small case only, even if u send as Authorization
    const receivedToken = req.headers.authorization;
    let foundUser = null;

    for (let i = 0; i < users.length; i++){
        if (users[i].token === receivedToken){
            foundUser = users[i];
        }
    }
    if (foundUser){
        res.status(200).json({
            success: true,
            msg: `Welcome ${foundUser.username}`
        })
    } else {
        res.status(402).json({
            success: false, 
            msg: "Invalid Token"
        })
    }
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
})