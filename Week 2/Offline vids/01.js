// call back hell
// printing hi after 1 second
// once hi is printed, print hi after 3 seconds (waiting for 1 async task to finish before starting another one -> callback hell);
// once hi is printed, print hi after 5 seconds 
function timerHi(){
    setTimeout(function(){
        console.log("Hi after 1 second");
        setTimeout(function(){
            console.log("Hi after 3 seconds");
            setTimeout(function(){
                console.log("Hi after 5 seconds");
            }, 5000);
        }, 3000);
    }, 1000);
};

// timerHi();

// Solution (alt soltuion with cbs exist -> calling functions one after the other)
// BUT PROMISESSSS

function setTimeoutPromisified(duration){
    return new Promise(resolve => setTimeout(resolve, duration));
}

// then hell
// setTimeoutPromisified(1000).then(function(){
//     console.log("hi after 1 second");
//     setTimeoutPromisified(3000).then(function(){
//         console.log("Hi after 3 seconds");
//         setTimeoutPromisified(5000).then(function(){
//             console.log("hi after 5 seconds");
//         })
//     })
// });


// solution -> promise chaining 
setTimeoutPromisified(1000).then(function(){
    console.log("Hi after 1 second");
    return setTimeoutPromisified(3000)
    // since this returns a promise
    // you can do .then(cb) to run the cb when the async task is completed
}).then(function(){
    console.log("Hi after 3 second");
    return setTimeoutPromisified(5000)
    // same for here 
}).then(function(){
    console.log("Hi after 5 seconds");
})
