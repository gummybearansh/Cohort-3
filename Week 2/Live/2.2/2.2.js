// Classes in JS -> blueprints for creating objects.

// rectangle is a class that creates rectangle object
class Rectangle{
    // Rectanle(width, height, color) can be called with new to create a Rectangle object
    // this is same as the variable name that will be asigned to the object that is created using this class 
    // the parameters of the function are just random names, the this.___ is the actual variable that can be accessed later on 
    constructor(width, h, color){
        this.width = width;
        this.height = h;
        this.color = color;
    }

    // member function in the class. can be used to find area of a Rectangle object
    area(){
        // width and height are bound to this. no need to pass them as arguments 
        const area = this.height * this.width;
        return area;
    }

    // member function to find which color is Rectangle painted with
    paint(){
        console.log(`Paintint this area with ${this.color}`);
    }
}


const rect1 = new Rectangle(10, 10);
const rect2 = new Rectangle(20, 10, "red");
// console.log(rect2);
// console.log(rect1.area);
// console.log(rect1.area());
// console.log(rect2.area());
// rect1.paint();
// rect2.paint();

// Key Concepts: 

// 1. Class Declaration
// -> class is declared using "class" keyword. 
// -> inside the class you define properties (variables) and methods (functions) that will belong to the instances (objects) created by the class 

// 2. Constructor
// -> A special method inside the class that is called when you create an instance (object) of the class 
// -> used to initialize properties of the object 

// 3. Methods 
// -> Functions that are created inside the class, are accessible by all instances of the class 

// 4. Inheritence 
// -> classes can inherit properties and methods from other classes, allowing you to create a new class based on an existing one 

// 5. Static methods 
// -> methods (functions) that belong to the class itself, not to the instances. Can be called on the class itself 

// 6. Getters and Setters 
// -> Special methods that allow you to define how properties are accessed and modified 


// just a key-value pair object
// provides access to a single variable's width, height and area properties 
// class can be used to create as many rectangles with all those properties and methods as needed, with much cleaner syntax 
const rectangleObject = {
    width: 100,
    height: 2,

    // this doesnt work
    areaWrong: () => this.width * this.height,
    // this works
    area: () => rectangleObject.width * rectangleObject.height

}
// console.log(rectangleObject.area());


// Some more Classes: 
// Date
const now = new Date();
// console.log(now.toLocaleString());

// Maps 
const map = new Map();
map.set("Name", "Alice");
map.set("Age", 30);
// console.log(map.get("Name"));
// console.log(map.get("Age"));


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
setTimeout(callback, 1000);
// promisified version
// setTimeoutPromisified(3000).then(callback);

let p = setTimeoutPromisified(3000);

// promise class says, i will take 1 function as an input.
// whatever the first argument of that function is is called 
// i will call the .then(__) walla function 

function main(){
    console.log("Main was called");
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
setTimeoutPromisifiedSimpler(3000).then(main);


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
