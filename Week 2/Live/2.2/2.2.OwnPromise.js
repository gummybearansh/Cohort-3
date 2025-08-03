class PromiseOwn{
    // constructor runs as soon as promiseOwn object is created
    constructor(fn){
        // variable to remember if async task is finished i.e. "resolved" state
        this.isResolved = false;
        // the cb function that will be set by the user using .then()
        this.callback = null;

        // short trick because inside some functions this would be different
        const self = this;

        // when async task is completed, this will be called
        function resolve(){
            // if user has already called .then and provided the cb, call it now
            if (self.callback){
                self.callback();
            }

            // async task is completed, promise is resolved
            // if u use this instead of self -> type error -> this.isResolved is undefined 
            // because -> function declarations create their own "this" context.
            // solution -> use the self as it is used here 
            // or use arrow functions -> arrow functions do now have their own this
            // they use this from where they are created
            self.isResolved = true;
        }

        // start the async task given by the user (fn) right away
        // resolve will be called by the user's async function itself when the async task is completed
        fn(resolve);
    }
    // constructor ended here 

    // user can provide the function to be called
    then(cb){
        this.callback = cb;
        // if async task has been completed when then is called, call cb immediately 
        if (this.isResolved){
            this.callback();
        }
    }
}


function asyncTask(resolve){
    setTimeout(function (){
        console.log("Async Task Completed");
        // resolve gets called after async task is completed
        resolve();
    }, 1000);
}

function ownPromiseReturner(){
    return new PromiseOwn(asyncTask);
}

function callback(){
    console.log("cb has been called");
}

ownPromiseReturner().then(callback);
