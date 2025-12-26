// need for state management library - re-rendering optimisation - go to Increment and Decrement component
import { useState, createContext, useContext } from 'react';


const CountContext = createContext();

function CountProvider({ children }){
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{
      count,
      setCount
    }}>
      { children }
    </CountContext.Provider>
  )  
}

function Parent(){
  return (
    <CountProvider>
      <Increment />
      <Decrement />
      <Value />
    </CountProvider>
  )

}

// Both increment and decrement have no use for 'Count'
// hence they don't need to be updated when the state changes
// but THEY DO RE-RENDER Unnecessarily 
// that is why we use State Management Libaries like Recoil, Zustand, Redux - to only re-render when the component's state actually changes
function Decrement(){
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount(curr => curr - 1)}>Decrease</button>
  )
}
function Increment(){
  const { setCount } = useContext(CountContext);
  return (
    <button onClick={() => setCount(curr => curr + 1)}>Increase</button>
  )
}

function Value(){
  const { count } = useContext(CountContext);

  return (
    <div>{ count } </div>
  )
}
export default function App3(){
  return (
    <div>
      <Parent/> 
    </div>
  )
}
