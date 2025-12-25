import { useState } from "react";

function App() {
  return (
    <div style={{display: "flex"}}>
      {/* // if you name the prop as 'children', u can just pass in the html props like this:  */}
      <Card>
        {/* these inner props get passed into 'children' */}
        <div>Hi there</div>
      </Card>
      <Card>
        <div>Enter Post details</div>
        <input></input>
      </Card>
    </div>
  );
}

// children prop automatically becomes the html given inside the 'Card' being called 
function Card({ children }) {
  return (
    <div
      style={{
        background: "black",
        borderRadius: "10",
        color: "white",
        padding: "20px", 
        margin: "20px"
      }}
    >
      {children}
    </div>
    
  );
}
export default App;
