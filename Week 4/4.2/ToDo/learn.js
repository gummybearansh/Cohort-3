const express = require("express");
const app = express();

app.use(express.json())

// route handler for the '/' route, handling GET Requests to '/' route
app.get('/', function(req, res){
    res.send('Hello World');
    console.log(req.body);
})

// starting a server is an asynchronous operation - it takes a small amount of time to find the port, reserve it and start listening. 
// callback function runs after after server has successfully started
app.listen(3000, () => {
    console.log("Server listening on port 3000")
})