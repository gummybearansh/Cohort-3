import { createContext, useContext, useState } from "react"

// ideally defined in a seperate file, it's independent of the components - anyone can have it
const BulbContext = createContext();


// can make it even more cleaner by defining the provider and the things it's passing in it's own component 
// Custom Provider wrapper
function BulbProvider({ children }){
  const [isLightOn, setLightOn] = useState(false);

  return (
    <BulbContext.Provider value={{
      isLightOn, 
      setLightOn
    }}>
      { children }
    </BulbContext.Provider>
  )
}

// main logic looks so much cleaner
export default function App2(){

  return (
    <div>
      <BulbProvider>
        {/* children inside the Provider have access to the data sent in the value object */}
        <Light />
      </BulbProvider>
    </div>
  )
}


// this guy didnt need the props, but had to pass it to the children, context Api takes care of that for us
function Light(){
  return (
    <div>
      <LightBulb />
      <LightSwitch />
    </div>
  )
}

function LightBulb(){
  const { isLightOn } = useContext(BulbContext);

  return (
    <div>
      { isLightOn ? 
        <h2>BULB IS ON!!</h2>:
        <h2>BULB IS OFF!!</h2>
      }
    </div>
  )
}

function LightSwitch(){
  const { isLightOn, setLightOn} = useContext(BulbContext);

  function toggle(){
    setLightOn(!isLightOn)
  }

  return (
  <div>
      <button onClick={toggle}>{isLightOn ? "OFF" : "ON"}</button>
    </div>
  )
}
