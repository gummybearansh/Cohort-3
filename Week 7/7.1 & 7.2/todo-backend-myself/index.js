const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const { TodoModel, UserModel } = require("./db")
const { auth } = require("./auth");
require("dotenv").config();

const app = express();
app.use(express.json());
const JWT_SECRET = process.env.JWT_SECRET;

app.post('/signup', async (req, res) => {
    const { email, password, name } = req.body;

    const hashedPassword = await bcrypt.hash(password, 5)

    try {
        await UserModel.create({
            email, 
            name,
            password: hashedPassword,
        })
        res.json({
            message: "User added Successfully"
        })
    } catch (e) {
        if (e.code == 11000){
            res.status(400).json({
                message: "User with email exists already, please sign in"
            })
        } else {
            res.status(500).json({
                message: "Server error"
            })
        }
    }
})

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const foundUser = await UserModel.findOne({
        email,
    })
    
    if (!foundUser){
        res.status(403).json({
            message: "No user with email found, please Sign Up",
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password);

    if (!passwordMatch){
        res.status(403).json({
            message: "Invalid Credentials"
        })
        return;
    }

    const token = jwt.sign({
        id: foundUser._id
    }, JWT_SECRET)

    res.json({
        message: "You are successfully logged in", 
        token
    })

})

app.post('/todo', auth, async (req, res) => {
    const id = req.id;
    const { description, done } = req.body;

    try {
        await TodoModel.create({
            description,
            done,
            UserId: id
        })
        res.json({
            message: "To do created successfully"
        })
    } catch (e) {
        console.log(e);
        res.status(400).json({
            message: "Invalid request"
        })
    }
    
})

app.get('/todos', auth, async (req, res) => {
    const id = req.id;

    try {
        const todos = await TodoModel.find({
            UserId: id
        })

        res.json({
            message: "query completed successfully",
            todos
        })
    } catch (e) {
        res.status(500).json({
            message: "Server error"
        })
    }
})

async function main(){
    const CONNECTION_STRING = process.env.CONNECTION_STRING;
    try {
        await mongoose.connect(CONNECTION_STRING);
        console.log("Connected to MongoDb")

        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })
    } catch {
        console.log("Error connecting to db");
    }
}

main();