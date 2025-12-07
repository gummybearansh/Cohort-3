const express = require("express");
const app = express();

app.get('/sum/:firstNumber/:secondNumber', (req, res) => {
    const a = parseInt(req.params.firstNumber);
    const b = parseInt(req.params.secondNumber);

    res.status(200).json({
        "sum": a+b
    })
})

app.get('/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.status(200).json({
        "difference": a-b
    })
})

app.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.status(200).json({
        "product": a*b
    })
})

app.get('/divide', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.status(200).json({
        "quotient": a/b
    })
})

app.listen(3000, () => console.log("server running"));

