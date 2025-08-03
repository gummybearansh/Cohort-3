// what all languages can your browser interpret? 
// css, js, WebAssembly. it can technically run c++/Rust code that is compiled down to WebAsm 

// Javascript
// 1. Interpreted language -> executed line by line at run-time by the JS engine in the browser or server environment, rather than being compiled into machine code beforehand. 
// Upside -> one less step to do before running code 
// DownSide -> performance overhead (compile + run at every line) 
//          -> more prone to runtime errors 

// 2. Dynamically Typed 
// variables in js are not bound to a data type. types are determined at runtime and can change as the program executes 

// 3. Single Threaded -> performs one task at a time 

// 4. Garbage Collected 
// Automatically manages memory allocation and deallocation through garbage collection; which helps prevent memory leaks by automatically reclaiming memory from objects no longer in use. 
// Objects in js -> collection of (key, value) pairs (key = string, value -> any data type even complex) 

function greet(user){
    console.log(`hello ${user.name}, you are ${user.age} years old`)
    if (user.age > 18) console.log(`${user.name} is eligible to vote`)
    else console.log("sorry you are not eligible to vote");
}
let user2 = {
    name: "lachchwani", 
    age: 20, 
    occupation: "student"
};
let user1 = {
    name: "Ansh", 
    age: 1, 
    occupation: "student"
};

// greet(user1);
// greet(user2);

let arr = ["hello", "world", {
    w1: "am", 
    w2: "i", 
    3: "cooking?"
}]

// console.log(arr[2]["3"])
// console.log(arr[2].w1, arr[2].w2, arr[2]["3"]);

function eligible(users){
    const ans = users.filter((user) => {
        return user.age > 18;
        // if returns true then element is added otherwise skipped
    })
    return ans;
}
let users = [
    {
        name: "ansh", 
        age: 21     
    }, {
        name: "lachhwani", 
        age: 20
    }, {
        name: "king", 
        age: 8
    }, {
        name: "kohli", 
        age: 11
    }
]

let eligibleUsers = eligible(users);
eligibleUsers.forEach(element => {
    console.log(element);
});
