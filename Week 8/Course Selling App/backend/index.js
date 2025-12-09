const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user")
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")
const { UserModel, AdminModel, CourseModel, PurchaseModel } = require("./db")
require("dotenv").config();

const app = express();
app.use(express.json());

// all routes that begin with '/user' are handle by the user router
// userRouter imported from the /routes/user.js fiel, go see it 
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

async function main(){
    try {
        // backend will start only when the connection to db is established 
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("connected to db successfully")
        app.listen(3000, () => {
            console.log("Server (running) listening on port 3000")
        })
    } catch {
        console.log("Error connecting to db");
        return;
    }
}

main();