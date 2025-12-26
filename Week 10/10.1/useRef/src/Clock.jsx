import { useState, useRef } from "react";

// Clock with start and stop functionality
function Clock() {
  const [currentCount, setCurrentCount] = useState(0);
  // if i use a normal variable (let timer = 0), on every re-render - the timer gets updated and the clearInterval will never run with the actual timer

  // const [timer, setTimer] = useState(0);

  // best approach: useRef -> need persistence without triggering re-render on change
  // basically timer = {current: undefined}
  const timer = useRef();

  function startClock() {
    const value = setInterval(() => {
      setCurrentCount((c) => c + 1);
    }, 1000);
    timer.current = value;

    // one extra re-render because timer variable was set updated
    // actually don't need the re-render
    // setTimer(value);
  }

  function stopClock() {
    // just clears the 1 second updation logic
    // the 'currentCount' is preserved as a variable
    // whenever start is clicked again -> a new interval begins and every 1 second..
    clearInterval(timer.current);
  }

  return (
    <div>
      {currentCount}
      <br />
      <button onClick={startClock}>Start</button>
      <button onClick={stopClock}>Start</button>
    </div>
  );
}

export default Clock;
