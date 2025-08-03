// considering errors
const { captureRejectionSymbol } = require("events");
const fs = require("fs");

function asyncFS(filename){
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf-8", (err, data) => {
            if (err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    });
}

async function read(){
    // if promise resolves, control goes to try
    try {
        const data = await asyncFS("a.txt");
        console.log("File parsed successfully");
        console.log(data);
    } 
    // if error, control goes to catch 
    catch (err){
        console.log("Error parsing file");
        console.log(err);
    }
}

read();
