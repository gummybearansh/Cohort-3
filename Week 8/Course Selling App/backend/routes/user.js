// this file will contain the user routes
const { Router } = require("express");
// or can do express = require("express") and then call .Router on express 
const { UserModel, PurchaseModel } = require("../db")
const { userMiddleware } = require("../middlewares/user")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// call the Router funciton, now u can use the thing this function returns to map routes 
const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await UserModel.create({
            email, 
            password: hashedPassword, 
            firstName,
            lastName
        })

        res.json({
            msg: "User created successfully"
        })

    } catch (e) {
        if (e.code == 11000){
            res.status(400).json({
                msg: "User already exists. Please Sign In"
            })
        } else {
            console.log(e);
            res.status(500).json({
                msg: "Server error"
            })
        }
    }
})

userRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const foundUser = await UserModel.findOne({
        email: email
    })

    if (!foundUser){
        res.status(400).json({
            msg: "User does not exist, please Sign Up"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, foundUser.password)

    if (!passwordMatch){
        res.status(401).json({
            msg: "Invalid Credentials"
        })
        return;
    }

    const token = jwt.sign({
        id: foundUser._id
    }, process.env.JWT_USER_PASSWORD);

    res.json({
        msg: "Signed in Successfully!",
        token
    })
})

userRouter.get("/my-courses", userMiddleware, async (req, res) => {
    const userId = req.id; 

    const courses = await PurchaseModel.find({
        userId: userId
    })


    res.json({
        courses
    })
})

module.exports = {
    userRouter
}