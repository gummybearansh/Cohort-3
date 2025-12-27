import { useState } from "react";


// defining custom hook for Counter -> can be used as a black box in component now
function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1);
  }

  // the two things that any component using the counter might require:
  return {
    count,
    increaseCount
  }
}

function Counter(){
  const { count, increaseCount } = useCounter();

  return (
    <button onClick={increaseCount}>{ count }</button>
  )
}

function App() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App;
