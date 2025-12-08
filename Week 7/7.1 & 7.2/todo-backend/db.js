// defining schema of db in this file
// library to define schema and interact w db
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// defining schema of a User (how a document/row in the Users collection/table will look like)
const User = new Schema({
    name: String,
    email: {type: String, unique: true},
    password: String
});

// defining schema of a todo 
const Todo = new Schema({
    // maps to userId of the person's who's todo this is
    userId: ObjectId, 
    description: String, 
    done: Boolean
});

// Users and Todos are the collections (tables) 
// Model takes the blueprint (schema) and actually interacts with the db, basically gives us high level functions to interact w the db
// Note: Autonaming -> collections/dbs -> small letter, plural ex: users, people
// Classes/Models - capitalised, Singular
const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

// exports the models from db.js set up file and can be imported anywhere like this (ideally on server)
// const { UserModel, TodoMode } = require("./db")
module.exports = {
    // can also use shorthand since key and value are same 
    UserModel: UserModel,
    TodoModel: TodoModel
}


