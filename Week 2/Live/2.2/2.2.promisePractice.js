const fs = require("fs");


function readFilePromisified(fileName){
    return new Promise(resolve => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            data = data.trim();
            console.log("is this async here too?");
            resolve(data);
        });
        
    })
}

function resolve(data){
    console.log(data);
}


readFilePromisified("file.txt").then(resolve);
console.log("Yes it's async");
