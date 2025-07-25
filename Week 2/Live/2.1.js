// Synchronous Code 
// ^executed line by line, in the order in which it's written. each operation waits for the previous one to complete before moving on to the next one 

function sum(n){
    let ans = 0;
    for (let i = 1; i <= n; i++){
        ans += i;
    }
    return ans;
}

let ans = sum(100);
// console.log(ans);
ans = sum(10000);
// console.log(ans);
ans = sum(1000000);
// console.log(ans);

// IO Heavy Operations
// ^ operations that require a lot of data transfer from the program to external systems/devices.
// These operations usually require data to be read from or written to sources like disks, networks, databases, or external devices, which can be time-consuming compared to in memory computations
// Examples: Reading a file, Starting a clock, HTTP requests. 

// fs lib -> all logic to read contents from a file -> just need to import it like this:
const fs = require('fs');

// shows all functions this 'fs' object has 
// console.log(fs);

// utf-8 -> encoding for english language (ascii, utf16le, hex etc)
const contents = fs.readFileSync("a.txt", "utf-8" ); // reads file synchronously
console.log(contents);

const contentsB = fs.readFileSync("b.txt", "utf-8"); // reads the file asynchronously 
console.log(contentsB);

// IO Bound tasks VS CPU Bound tasks 
// CPU bound tasks: are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning the performance bottleneck is the CPU itself. (RW example: running for 3 miles -> brain+body needs to be consciously active for whole 3 miles)
// IO Bound Tasks: are limited by the systems I/O capabilities, such as disk IO, network IO or any other form of data transfer. these tasks spend most of their time waiting for the IO transfer to complete (RW example: boiling water -> I don't have to do much work, i just put water in kettle, and my brain can be occupied elsewhere)

console.log("Asynchonously: ");

const contents1 = fs.readFile("a.txt", "utf-8", function (err, data){
    console.log(data);
});

const contents2 = fs.readFile("b.txt", "utf-8", function (err, data){
    console.log(data);
});

// Functional Arguments: passing a function, as an argument, to another function. 

function sum(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a/b;
}

// function to execute is passed to this guy, he returns whatever function you are calling
function doOperation(a, b, op){
    return op(a, b);
}

// lol this ran before the async read operations completed XDXD
console.log(doOperation(2, 3, multiply));
