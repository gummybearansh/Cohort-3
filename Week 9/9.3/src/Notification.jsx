import React, { useState } from 'react';

export function Notification() { 
    const [ count, setCount ] = useState(0);

    console.log("notification re rendered")
    // will cause a bunch of logs
    //  
    // i used setTimeout first - lmao - but tha'ts wrong basically what was happening was - setTimeout gets called - 1 second clock begins - then setCount is updated - so the component re-renders - because of the re-render the setTimeout is called again - it was a logical flaw with correct execution
    // setInterval is the right solution (logicall
    // setInterval(() => {
    //     setCount(count + 1)
    // }, 1000)
    return (
        <div style={{display: "flex"}}>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-fFiCTtRckOX7KSc9x6VjDHqGYz6ZO7J1Jg&s"} style={{
                width: "50px", 
                height: "50px"
            }}></img>
            { count } 
        </div>
    )
}