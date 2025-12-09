// handles all routes for /course endpoint
const { Router } = require("express");
const { userMiddleware } = require("../middlewares/user")
const { PurchaseModel, CourseModel } = require("../db");
const courseRouter = Router();

courseRouter.post("/purchase", userMiddleware, async (req, res) => {
    const userId = req.id;
    const courseId = req.body.courseId;

    await PurchaseModel.create({
        userId, 
        courseId
    })

    res.json({
        msg: "success"
    })
})

courseRouter.get("/preview", async (req, res) => {
    const courses = await CourseModel.find({})

    res.json({
        courses
    })
})

module.exports = {
    courseRouter
}