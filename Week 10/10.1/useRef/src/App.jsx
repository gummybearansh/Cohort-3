import { useRef } from "react"

function App() {
  const inputRef = useRef();    

  function focusInput(){
    // in normal DOM manipulation:
    // document.getElementById("input-box-one").focus();
    //
    // avoid raw DOM manipulation as much as possible in react, useRef instead: 
    // .current gives -> ??
    inputRef.current.focus();
  }

  return (
    <div>
      Sign Up
      {/* inputRef now refers to this input box */}
      <input ref={inputRef} type="text"/>
      <input type="text"/>
      <button onClick={focusInput}>Submit</button>
    </div>
  )
}

export default App
