// Auth Workflow: 
// user comes to your website, signs in on "/signin" using their "username" and "password"
// the user gets back a 'token' 
// in every subsequent request, the user can send in that 'token' to identify itself on the backend 

// JWTs vs Tokens
// there is a problem with using 'Stateful' tokens
// stateful -> we need to store these tokens in a variable right now, and eventually in the database. 
// problem -> we will need to send a request to the db every single time user wants to hit an authenticated end point (and the background requests as well) 
// Solution: JWTs

// JWT (JSON Web Token)
// compact, self sustained, way to represent information between two parties. commonly used for authentication and information exchange between two parties. 
// JWTs are stateless - they need all the information to authenticate a request, so the server doesn't need to store session data, all data is stored within the token itself