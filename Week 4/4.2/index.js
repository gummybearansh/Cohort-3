// HTTP Protocol - goal - machines to talk to each other   
// explore network requests going on in chrome dev tools - url, request method, status code (that the server returns), remote address (ip address that the url resolves to), request and response headers 
// other protocols - webRTC, webSockets, GRPC

// request - response model (client server model) already know in depth 

// domain name -> ip (already know in depth about DNS)

// Ports - logical endpoints ('doors') used by protocols to identify specific processes running on a computer/server. help direct traffic to the correct service/application on the machine

// Methods - good way to structure your https requests 
// 4 popular methods, many more exist
// Create - POST Request
// Read - GET Request
// Update - PUT Requet 
// Delete - DELETE Request 

// Response - what the server returns in 'response' to the request 
// Plain text, JSON, HTML

// Status Codes 
// Three digit number returned by the server to indicate the outcome of a clients request. information about the status of the client's request and the server's response 

// 200 series - success 
// 200 OK - server processed the request and returned the requested resource 
// 204 No content - Request was successfull but there is no content to return 

// 300 Series - redirection 
// 301 Moved permanently - the requested resource has moved to a new url permanently. the client should use the new url returned in response
// 302 Not Modified - the resource has not been modified since the last request, the client can use the cached version 

// 400 series - client error 
// 400 Bad request - Server could not understand request due to bad syntax 
// 401 Unauthorized - this request requires user authentication. the client must provide credentials 
// 403 Forbidden - The server understands the request but refuses to authorize it 
// 404 Not found - the requested resource could not be found on the server 

// 500 series - Server error 
// 500 Internal Server Error - The server encountered an unexpected condition that prevented it from fullfilling the request 
// 502 Bad Gateway - The server received an invalid response from an upstream server whlie acting as a gateway or proxy

// Body - in HTTP communication, body (or payload) contains the actual being sent to the server - usually JSON

// Routes - paths or endpoints that define how incoming requests are handled by a server. routing is a mechanism used to direct incoming http requests to the appropriate handler functions or resources based on the url path

// HTTP Headers - key value pairs, included in requests, that provide metadata about the message 
// even though u can use body for everything, it's a good idea to use Headers for data that isn't directly related to the application logic. EX: in todo app, the to do description and stuff should be in the id, but the authentication should be in the header
