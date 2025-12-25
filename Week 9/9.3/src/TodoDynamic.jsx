import { useState, useEffect } from 'react'

export function TodoDynamic() {
    const [currentTab, setCurrentTab] = useState(1);
    const [tabdata, setTabdata] = useState({loading: true});
    const [loading, setLoading] = useState(true);

    // don't make the 'effect' function async, put the async function inside it and immediately call ti
    useEffect(() => {
        // using iife - anonymous function, declared and immediately called
        // (function() {//}())
        (async () => {
            console.log("backend request sent for todo number " + currentTab)

            setLoading(true);
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
            const data = await response.json();
            setLoading(false);

            console.log(data);
            setTabdata(data)
        })();

    }, [currentTab])
    
    return (
        <div>
            <div>
                <button onClick={() => setCurrentTab(1)} style={{color: currentTab == 1 ? "red" : "black"}}>Todo #1</button>
                <button onClick={() => setCurrentTab(2)} style={{color: currentTab == 2 ? "red" : "black"}}>Todo #2</button>
                <button onClick={() => setCurrentTab(3)} style={{color: currentTab == 3 ? "red" : "black"}}>Todo #3</button>
                <button onClick={() => setCurrentTab(4)} style={{color: currentTab == 4 ? "red" : "black"}}>Todo #4</button>
            </div>
            <div> 
                {/* { JSON.stringify(tabdata)} */}
                {/* cannot just render the whole object  */}
                { loading ? "loading" : tabdata.title}
                
            </div>
        </div>
    )
}