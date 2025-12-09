const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// populates "users" collection (table)
const User = new Schema({
    email: {
        type: String, 
        unique: true
    }, 
    password: String, 
    firstName: String, 
    lastName: String
})

// populated "admins" collection (table)
const Admin = new Schema({
    email: { 
        type: String, 
        unique: true
    }, 
    password: String, 
    firstName: String, 
    lastName: String
})

// populates "courses" collection
const Course = new Schema({ 
    title: String, 
    description: String, 
    price: Number, 
    imageURL: String,
    creatorId: Schema.ObjectId
})

// populates the 'purchases' colletion
const Purchase = new Schema({
    userId: Schema.ObjectId, 
    courseId: Schema.ObjectId
})

// always remember -> mongoose will automatically create collection as plural of the schema -> user(s), admin(s), course(s). unless u specify a different name as the third parameter while creating the model object
const UserModel = new mongoose.model("users", User);
const AdminModel = new mongoose.model("admin", Admin);
const CourseModel = new mongoose.model("course", Course);
const PurchaseModel = new mongoose.model("purchases", Purchase);

module.exports = {
    UserModel, 
    AdminModel, 
    CourseModel,
    PurchaseModel
}