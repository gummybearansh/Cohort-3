// Node JS 
// Node js is an open-source "JS Runtime" that allows u to execute javascript code on the server side (backend). it is built on top of chrome's V8 Engine. (V8 Engine + other nodeJS specific functionality like FS.readFile etc)

// Runtime? 
// environment where the js executes 
// -> browser 
// -> server 

// V8 Engine 
// Open source JS engine developed by Google.
// Used to execute JS code in various environments, most notably in browsers (chrome, chromium based all)
// Mozilla -> SpiderMonkey
// Safari -> JavaScriptCore

// Bun -> runtime like node.js (much faster + other improvements) written in ZIG (a low level language)
// Uses Safaris JavaScriptCore engine, inbuilt APIs, better DX

// Initialize node project -> npm init -y
// basically creates a package.json file (for rust its called cargo.toml)
// see screenshot for details about what gets added to package.json

//  ====== **** ==== ====== **** ==== ====== **** ==== ====== **** ==== ====== **** ========== **** =====

// in the scripts -> "start": "node index.js"
// means -> whenever 'npm run start' is called 
// node index.json will be run
// can be configured to run any script 

// console.log("hello world");


// npm -> node package manager
// primarily used to manage packages and dependencies in node.js projects. allows devs to easily install, update and manage packages of reusable code. 

// installing external dependencies -> npm install chalk 
// creates a node_modules folder
// also adds 'chalk' with least needed version in the "dependencies" inside the package.json

// import chalk from 'chalk';
// since it requires it to be a module, use it in a .mjs file


// Internal Packages 
// Node js provies some packages in of the box -> fs, path, http

// __dirname => global variable containing this file's full path
console.log(__dirname);

// another in built node's library
const path = require("path");

// normalises path so it accurately finds the file looking for 
// if it had multiple paths -> path.join(__dirname, "../project/index.js/../../'a.txt")o
// .join will resolve the path to be the simplest possible path
// ../../ means go back 2 folders, then look in that folder for "_whatever_" -> so join will just simplify these and give u the final locaiton needed 
const filePath = path.join(__dirname, "a.txt");

console.log(filePath);


// External Packages
// packages written and maintained by other people, can just simply use their functionality in your own project      

// whenever external package is added -> it brings all its files, as well as all the packages it itself uses (more dependencies)
// so node_modules becomes very heavy
// but even if u delete the node_modules folder
// because the package.json stores "dependenceis" : {_your depndencies_ : ^version}, you can just run 'npm install' and npm will automatically install all the required dependencies back in your node_modules folder. 
// this is why u never push node_modules to github as well. 

// understanding 'Semantic Versioning Format'
// "chalk": "^5.3.0";
// Major.Minor.Patch
// major -> significant updates/breaking changes
// minor -> addition of new features, improvements in a backwards-compatible manner
// patch -> backward-compatible bug fixes or minor improvements, that address isues without adding new features or breaking excisting things
// '^' means node will install any version compatible with 5.3.0 but less than 6.0.0
// "chalk":"latest" will install the latest version 

// package-lock.json -> pins the versons of packages in the dependencies 
// too much ambiguity -> creates a bunch of problems (discrepencies) in devs using different versions, so package-lock locks the version of the depenencies 
