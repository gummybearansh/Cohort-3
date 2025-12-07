const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
// default no parameter definition: 
// const corsOptions = {
//     "origin": "*", // requests from anywhere are allowed, can specify domains, subdomains regex etc
//     "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     "preflightContinue": false, // kuch toh hota hai preflight OPTIONS
//     "optionsSuccessStatus": 204

// }
// app.use(cors(corsOptions));

app.get('/sum/:a/:b', (req, res, next) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a+b
    })
})

app.get('/difference/:a/:b', (req, res, next) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a-b
    })
})

app.get('/multiply/:a/:b', (req, res, next) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a*b
    })
})

app.get('/divide/:a/:b', (req, res, next) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.json({
        answer: a/b
    })
})
app.listen(3000, () => {
    console.log("Server Running on port 3000");
})