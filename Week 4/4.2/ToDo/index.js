// GOAL: Create an in memory to do app
// Basic CRUD Operations
const express = require("express")
const fs = require("fs");
const Buffer = require("buffer");

const app = express();

// middleware parser to parse body
app.use(express.json())

// get all todos
app.get('/todos', (req, res) => {
    fs.readFile("todos.txt", "utf-8", (err, data) => {
        if (err) throw err;
        else if (!data) res.send("No to dos found");
        else {
            let todos = JSON.parse(data);
            res.json(todos);
        }
    })
})

// add to do by sending a post request to the server
app.post('/todos', (req, res) => {
    fs.readFile("todos.txt", (err, data) => {
        let todos;
        if (err) throw err;
        if (data.length == 0) todos = [];
        else todos = JSON.parse(data);
        todos.push({
            id: todos.length + 1, 
            description: req.body.description,
        })
        console.log(data)
        data = JSON.stringify(todos);
        fs.writeFile("todos.txt", data, (err) => {
            if (err) throw err;
            console.log("File saved successfully after POST Request");
        })
        res.json(todos)
    })
})

// update a todo by id
app.put('/todos', (req, res) => {
    fs.readFile("todos.txt", (err, data) => {
        if (err) throw err;
        if (data.length == 0) {
            res.send("No todos found");
        }
        let todos = JSON.parse(data);
        todos = todos.filter((todo) => todo.id != req.body.id)
        todos.push({
            id: req.body.id, 
            description: req.body.description
        })
        
        data = JSON.stringify(todos);
        fs.writeFile("todos.txt", data, (err) => {
            if (err) throw err;
            console.log("File saved successfully after put request");
        })
        res.json(todos)
    })
})

// delete todo by id
app.delete('/todos', (req, res) => {
    fs.readFile("todos.txt", "utf-8", (err, data) => {
        if (err) throw err;
        if (data.length == 0) res.send("No todos found");
        let todos = JSON.parse(data);
        todos = todos.filter((todo) => todo.id != req.body.id)

        data = JSON.stringify(todos);
        fs.writeFile("todos.txt", data, (err) => {
            if (err) throw err;
            console.log("File saved successfully after delete request")
        })
        res.json(todos);
    })
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})