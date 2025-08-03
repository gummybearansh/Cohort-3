// PROMISES 
// A promise in js is an object that represents the "eventual completion" (or failure) of an asynchronous operation and its resulting value. 
// Promises are used to handle Asynchronous operations more effectively than callbacks, providing a cleaner and more manageable way to deal with code that executes asynchronously - API calls, Timers, I/O

function setTimeoutPromisified(ms){
    // return new Promise(resolve => setTimeout(resolve, ms));
    // basically returns an object 'promise'
    let p = new Promise(resolve => setTimeout(resolve, ms));
    // returns an object of the Promise Class 
    return p;
}

function callback(){
    // console.log("3 seconds have passed");
}


// cb version 
// setTimeout(callback, 1000);
// promisified version
// setTimeoutPromisified(3000).then(callback);

let p = setTimeoutPromisified(3000);

// promise class says, i will take 1 function as an input.
// whatever the first argument of that function is is called 
// i will call the .then(__) walla function 

function main(){
    // console.log("Main was called");
}

function waitFor3S(resolve){
    setTimeout(resolve, 3000);
}

function setTimeoutPromisifiedSimpler(ms){
    return new Promise(waitFor3S);
}

// setTimeoutPromisifiedSimpler returns a promise
// when the promise's input function's first function is executed (resovle) (gets executed when set timeout is done)
// it runs the main function .then() mein jo hai 
setTimeoutPromisifiedSimpler().then(main);


// promise represents eventual completion of async task
// whenever you eventually complete, please call my callback function
// so i need to also tell the promise 'when' will it eventually complete 
// you eventually complete when ___ happens
// promise took random as input
// that random took resolve as first argument
// whenever the first argument of random (resolve) gets called, promise understands that the async (evnetual task that was supposed to be completed) is completed, and can now call the callback function in the .then() call
let P = new Promise(random);
// first argument of random (the fucntion with which promise was created) is resolve 
// whenver resolve is called -> means the async op is completed
// please call the callback function in .then() 
function random(resolve){
    setTimeout(resolve, 1000);
}

// ^^^^ the person who created the promise 



//the person who's using the promise >>> 
function callback(){
    console.log("Callback Function Executed ")
}
P.then(callback);
console.log(P);
