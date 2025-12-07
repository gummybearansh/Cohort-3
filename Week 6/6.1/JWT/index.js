const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json())

const JWT_SECRET = "yummy potatoes";

const users = [];
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = {
        username: username,
        password: password
    }

    users.push(newUser);

    res.json({
        msg: "Success",
        users: users
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;
    for (let i = 0; i < users.length; i++){
        if (users[i].username == username && users[i].password == password){
            foundUser = users[i]
        }
    }

    if (foundUser){
        // this is stateless & self sufficient - don't need to store it in a db, can be verified by our secret, /me endpoint
        const token = jwt.sign({
            username: foundUser.username
        }, JWT_SECRET)

        res.json({
            msg: "Authentication Successful", 
            jwt: token
        });
    } else {
        res.json({
            msg: "invalid username or password"
        })
    }

    
})

app.get('/me', (req, res) => {
    const token = req.headers.authorization;
    let userDetails;
    try {
        userDetails = jwt.verify(token, JWT_SECRET);
    } catch (err){
        return res.status(404).json({
            msg: "Invalid token"
        })
    }

    const username = userDetails.username;
    const user = users.find((user) => user.username === username)

    if (user) {
        res.json({
            msg: `Successfully authenticated, welcome ${username}`
        })
    } else {
        res.status(401).json({
            msg: "Unauthorized"
        })
    }

})

app.listen(3000, () => {
    console.log("server running on port 3000")
})