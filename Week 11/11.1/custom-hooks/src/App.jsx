import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

export default function App(){
  const [currPost, setCurrPost] = useState(1); 

  // now that we're doing dynamic urls, if the useFetch did not have url in dependency in useEffect, the fetch would not have run
  // the component re-renders every time button is clicked - because state of 'App' changes - so a new url request is sent
  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/todos/${currPost}`);

  if (loading){
    return (
      <div>
        LOADING
      </div>
    )
  }

  return (
    <div>
      <button onClick={() => setCurrPost(1)}>1</button>
      <button onClick={() => setCurrPost(2)}>2</button>
      <button onClick={() => setCurrPost(3)}>3</button>
      <div>
        {data.title}
      </div>
    </div>
  )
}
