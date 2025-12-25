import { useState, useEffect } from 'react'

export function CountUp(){
    const [ count, setCount ] = useState(0);    

    // see notes & notification.jsx for problem with setTimeout or setInterval without useEffect approach 

    function updateCount(){
        // cannot just setCount(count + 1) 
        // beacuse when this function is called -> it's stores the static value of count - from the first time count is 0 -> so every 1 second its just calling setCount(0 + 1)
        // instead u pass a function into setCount like this: 
        console.log("updated Count")
        // setCount( (c) => c + 1)
        // basically saying - i dont care what the current count is, just find the latest count -> increment it by 1, and setCount to that. that's what the function inside does 
        setCount(function (currentCount) {
            const newCount = currentCount + 1;
            return newCount
        })
    }

    // gets an 'effect' function 
    // runs when anything form dependency array changes (or first time on mount) 
    useEffect( () => {
        // runs only once, so now updateCount gets called every one second (singular clock)
        setInterval(updateCount, 1000);
    }, [])

    return (
        <div>
            { count } 
        </div>
    )
}