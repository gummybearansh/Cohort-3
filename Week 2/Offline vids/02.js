// Async Await Syntax 
// ^ ways to write async code that looks and behaves like synchronous code in js making it easier to read and maintain  
// basically syntactic sugar on top of promises 

function setTimeoutPromisified(duration){
    return new Promise(resolve => setTimeout(resolve, duration));
}

// even though this is cleaner syntax to look at, under the hood it's still a promise
async function solve(){
    await setTimeoutPromisified(1000);
    // everything after await is literally just the thing that u put in .then(_here_walla_function_)
    console.log("Hi after 1 second");
    await setTimeoutPromisified(3000);
    console.log("Hi after 3 seconds");
    await setTimeoutPromisified(5000);
    console.log("Hi after 5 seconds");
}

solve();

console.log("the function is not actually synchronous, control reaches here");
