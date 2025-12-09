const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { Router } = require("express");
const { AdminModel, CourseModel} = require("../db");
const { adminMiddleware } = require("../middlewares/admin")
require("dotenv").config();

const adminRouter = Router();

adminRouter.post('/signup', async (req, res) => {
    const { email, password, firstName, lastName } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await AdminModel.create({
            email, 
            password: hashedPassword, 
            firstName,
            lastName
        })

        res.json({
            msg: "Admin created successfully"
        })

    } catch (e) {
        if (e.code == 11000){
            res.status(400).json({
                msg: "Admin already exists. Please Sign In"
            })
        } else {
            console.log(e);
            res.status(500).json({
                msg: "Server error"
            })
        }
    }
})

adminRouter.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const foundAdmin = await AdminModel.findOne({
        email: email
    })

    if (!foundAdmin){
        res.status(400).json({
            msg: "Admin does not exist, please Sign Up"
        })
        return;
    }

    const passwordMatch = await bcrypt.compare(password, foundAdmin.password)

    if (!passwordMatch){
        res.status(401).json({
            msg: "Invalid Credentials"
        })
        return;
    }

    const token = jwt.sign({
        id: foundAdmin._id
    }, process.env.JWT_ADMIN_PASSWORD);

    res.json({
        msg: "Signed in Successfully!",
        token
    })
})

adminRouter.post("/create-course", adminMiddleware, async (req, res) => {
    const adminId = req.id;
    const { title, description, price, imageURL } = req.body;

    try {
        await CourseModel.create({
            title,
            description,
            price,
            imageURL, 
            creatorId: adminId
        })

        res.json({
            msg: "Course added successfully"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Error adding course"
        })
    }
})

adminRouter.put("/course", adminMiddleware, async (req, res) => {
    const adminId = req.id;
    const { title, description, price, imageURL, courseId} = req.body;

    try {
        const response = await CourseModel.updateOne({
            _id: courseId, 
            creatorId: adminId
        },{
            title,
            description,
            price,
            imageURL, 
            creatorId: adminId
        })

        console.log(response);
        console.log(adminId);
        console.log(courseId);

        if (!response.matchedCount){
            res.status(403).json({
                msg: "Forbidden"
            })
            return;
        }

        res.json({
            msg: "Course updated successfully"
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Error adding course"
        })
    }
})

adminRouter.get("/course/bulk", adminMiddleware, async (req, res) => {
    const adminId = req.id;

    try {
        const courses = await CourseModel.find({
            creatorId: adminId
        })
        res.json({
            msg: "Sucess",
            courses
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "error"
        })
    }
})


module.exports = {
    adminRouter
}