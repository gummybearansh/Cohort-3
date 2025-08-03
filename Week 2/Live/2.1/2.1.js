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
const contents = fs.readFileSync("a.txt", "utf-8"); // reads file synchronously, returns data in var contents
// console.log(contents);


// IO Bound tasks VS CPU Bound tasks 
// CPU bound tasks: are operations that are limited by the speed and power of the CPU. These tasks require significant computation and processing power, meaning the performance bottleneck is the CPU itself. (RW example: running for 3 miles -> brain+body needs to be consciously active for whole 3 miles)
// IO Bound Tasks: are limited by the systems I/O capabilities, such as disk IO, network IO or any other form of data transfer. these tasks spend most of their time waiting for the IO transfer to complete (RW example: boiling water -> I don't have to do much work, i just put water in kettle, and my brain can be occupied elsewhere)

console.log("Asynchonously: ");
// fs.readFile("a.txt", "utf-8", (err, data) => {
    // if (err){
    //     console.log("Error parsing the data");
    // } else {
    //     console.log(data);
    // }
// });

// err becomes null if there is no error in parsing file. 
function printFileContents(err, data){
    if (err){
        console.log("Error parsing the file!");
    } else {
        console.log(data);
    }
}

// basically -> readFile is called, which starts reading the file, but thread moves on
// once file is done reading -> the call-back function -> printFileContents is called
// which has 2 arguments, error (if file could not be parsed) and data (the contents of the file) and can simply print it
fs.readFile("a.txt", "utf-8", printFileContents);

// equivalent of previous call but written in readFile itself
fs.readFile("b.txt", "utf-8", (err, data) => {
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
// console.log(doOperation(2, 3, multiply));


// setTimeout function -> takes callback function as first argument, and time (in ms) as second argument
// calls the callback function after time has passed

function printHello(){
    console.log("Hello did u wait for me?");
}

// printHello is called after 1 second
setTimeout(printHello, 1000);

// cb declared in setTimeout itself
setTimeout(() => {
    console.log("Hello in half-a-second, even though my setTimeout was called after printHello's");
}, 500);


// even if setTimeout / any async function's cb call is ready
// thread will wait for remaining code to finish completing before returning to cb 
// like if there is an expensive operation

let c = 0
for (let i = 0; i < 1000000000; i++){
    c += i;
}
// this will get printed first -> since control reached here after delgating all async tasks to others 
// As and when async tasks were completed, they got added to the callback queue. (the one finished first gets called first -> here half-a-second was faster than even the file reads) 
// once webAPIs finished doing the async tasks, the task it added to the callback queue
// call stack -> the thing that is currently executing 
// if call stack is busy -> callback queue/webAPI will wait till call stack is empty, then one by one async things from callback queue gets pushed to call stack
console.log("Expensive operation Complete!");

// Async architecture of JS : 
// 1. Call Stack 
// DS that stores function calls and executions. (LIFO manner), meaning the last function to be called will be first to be executed and popped off from the stack.

// 2. Web APIs
// are provided by the browser (or node.js runtime) that provide functionality beyond js -> setTimeout, file handling, DOM requests, making nw requests 

// 3. Callback Queue
// list of tasks that are waiting for the callstack to be empty to begin their execution. they were added to the queue by web apis after their completion.

// 4. Event loop
// event loop constantly checks if the call stack is empty. if it is, and there are tasks in the callback queue, it will push the first call-back from the queue onto the stack for execution
