// MIDDLEWARES
// in express, middlewares refers to functions that have access to 'req', 'res' and 'next', request object 'req', response object 'res', and next function in the call stack 'next'
// - can modify the req and res objects
// - end the request response lifecycle
// - call the next middleware in the stack 

const { parse } = require("path");

// express framework -> basically a chain of middlewares, even the last route handler is basically a middleware only

// Commonly used middlewares: 
// app.use(express.json()) -> built in middleware in express to parse incoming request bodies that are formatted as JSON. essential for handling json bodies in put/post requests.
// uses bodyparser under the hood
// need to call express.json() whereas normal middlewares are just written as app.use(middleware) because express.json() actuall returns a funciton that is the actual middleware
const parserMiddleware = express.json();
app.use(parserMiddleware)

// CORS - Cross Origin Resource Sharing
// security feature implemented by web browsers/web servers that control how resources on a web server can be requested from another domain. crucial mechanism for managing 'cross-origin' requests and ensuring secure interactions bw different origins on the web
// on specific methods - POST
// facebook.com -> api.hdfcbank.com ?? should not be allowed to hit riht 
// hdfcbank.com -> api.hdfcbank.com -> ok
// this vulnerability exists in the browser - the background requests basically, this error does not occur on postman. tht is not a background request. 

// more gyaan: 
// the browser divides all requests into two categories: 
// 1. Simple requests - GET, HEAD, POST (if only sending simple form data, not JSON) - these methods often work immediately, without browser asking for special permission first, provied you're not sending custom headers like Authorization or json. 
// ^ they fail only if server receives request but does not send the header - 'Access-Control-Allow-Origin: *' or specific domain
// 2. Preflighted Requests - PUT, DELETE, PATCH, POST (sending JSON 99% of apis do) - always trigger a security check called a preflight, before actual request is sent. if server does not know how to handle this check, the request fails immediately. 
// browser sends an 'OPTIONS' request (hey server i'm planning to send say a DELETE request, is that fine?), server must respond with (Access-Control-Allow-Methods: DELETE) - then the browser will send the request. 
// instead of manually handling these requests - use app.use(cors()) - automatically handles the OPTIONS preflight for you

// npx serve
// basically serves file inside a folder via http
// can basically do 'npx serve' on a folder, and access it via the ip and port given by serve from any device on the same network
// pretty cool. 