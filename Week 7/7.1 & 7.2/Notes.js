// Databases are organised collections of data that are structured to enable efficient storage, retreival and management of information

// Types of DBs
// - Relational Databases: use tables to store data and relationships between data (MySQL, PostgreSQL)
// - NoSQL Databases: Designed for more flexible data models, and are often used for Big Data or real-time web applications (MonoDB)
// - Graph Databases: Stores data in nodes and edges to represent relationships (Neo4j)
// - Vector Databases: Used in ML to store data in the form of embeddings 

// (Mongo DB) - NoSQL Databse
// - Schema Flexibility: NoSQL dbs allow for flexible schema, meaning you can store data in fromats that don't require a fixed structure 
// - Scalability: many NoSQL DBs are designed to scale horizontally, making it easier to distribute data across multiple servers and handle large volumes of traffic 

// Mongo DB
// A NoSQL db that uses a document-oriented approach. Data is stored in flexible, JSON-like documents which can have nested structure and varied fields 
// see @image.png 

// Mongo DB is open source, but we're using their hosted version - gives us the 'connection string'
// mongodb+srv://username:password@cluster0.url.net/

// todos-database
// whenever creating a document (row) in a collection (table), mongodb automatically puts an 'object id' in it (unique) 
// looks like: 
/*
    "_id": {
        "$oid": "6935623be306e36f76426127"
    },
*/
// Users table -> contains username, password, and name
// Todos table -> all the todos, each todo (document) will have a "userId" field (key) that points to Users's table's user (relationship)

// BACKEND SIN - Storing passwords as plaintext in db
// store hashed passwords (one way conversion) 
// when user signs in - just rehash the entered password and compare it against the one stored in db easy peasey 
// but problem -> if 2 people have the same hash -> meaning same password -> therefore if i can get one person's password - i can get the other as well
// solution: Salting 
// you basically add some salt -> a random string -> and then hash the password with the salt and store it in the db with the salt (salt in plaintext)
// now even same passwords don't look alike hashed 
// also prevents hackers from using precomputed "rainbow tables" (table of popular passwords as hashes)

// input validation - ZOD 
// users are dumb, hackers are smart - just validate the input my nigga 
// create a zod schema, as to what input should look like, and 'parse' incoming against it 
