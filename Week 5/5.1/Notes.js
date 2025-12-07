// Headers
// Key value-pairs sent between client and servers, in HTTP request or response. convey metadata about the request or response such as content type, auth info etc.
// Ex: Authorization, Content-type (JSON, binary, etc), Referer (Which url is this request coming from)
// Request headers - client sends to server when making a request
// Response headers - server sends back to client when responding to a request 

// Fetch API 
// two high level ways to send request to server
// 1. From Browser URL (GET by default) 
// 2. From HTML Forms (GET/POST Method) or by Javascript (Fetch API, various methods GET, POST, DELETE etc and used for Asynchronous Data Retreival and manipulation) 

// example for fetch and axios in their files

// Query & parameters (see calculator for application)
// inputs given after ? in the URL are called query parameters, (usually in GET requests) key value pairs, example retrieval: req.query.[key]
// because GET requests don't have 'body' so u use query params if u wanna send sm
// PARAMS
// can also obtain them from the url itself, dyanmic /:var1/:var2 -> var1 & 2 will store whatever is after that /