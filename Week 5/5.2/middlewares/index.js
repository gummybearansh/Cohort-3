const express = require("express");
const app = express();

// a middleware that logs the request's METHOD, URL and timestamp
function metadataMiddleware(req, res, next){
    console.log(req.method);
    // req.protocol -> http or https 
    // req.get('host') -> host and port of the request. ex: localhost:3000, example.com
    // req.originalUrl -> the exact path and query string. ex: /users?id=123
    // req.path -> only the /users, no query string
    // req.query -> contains the key-value pair obj
    // req.params -> parsed url parameters object from route matching -> /users/:id gets request /users/42, then req.params = {id: 42}
    console.log(req.protocol + "://" + req.get('host') + req.originalUrl);
    const d = new Date();
    console.log(d.toTimeString());
    console.log();
    next();
}
// attaching it globally to all routes below it 
app.use(metadataMiddleware);

let requestCount = 0;
function requestCountMiddleware(req, res, next){
    requestCount++;
    console.log(`Request Number: ${requestCount}`)
    // if next() is not called, the reqeust response lifeycycle stays hung
    // to end the cycle early, send res.json here itself, further handlers are not called   
    next();
}


// admin route does not have middleware attached to it, because it is above the app.use
app.get('/admin', (req, res) => {
    res.json({
        requestCount: requestCount
    })
})

// all routes below app.use(middleware) will now have the middleware attached to them
app.use(requestCountMiddleware);
// it's now basically => 
// app.get(/route, ^thismiddlewarefirst, (any actual middleware that's not universal here), (then whatever final route handler cb is...))


// here sum route calls the middleware again, so each sum request gets logged twice, count goes up by 2
app.get("/sum/:a/:b", requestCountMiddleware, (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    res.status(200).json({
        answer: a+b
    })
})

app.get("/subtract/:a/:b", (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    res.status(200).json({
        answer: a-b
    })
})

app.get("/multiply/:a/:b", (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    res.status(200).json({
        answer: a*b
    })
})

app.get("/divide/:a/:b", (req, res) => {
    const a = parseInt(req.params.a)
    const b = parseInt(req.params.b)

    res.status(200).json({
        answer: a/b
    })
})

app.listen(3000, () => console.log("Server running on port 3000"));