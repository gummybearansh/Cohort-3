import { useState } from "react"

export default function App(){

  return (
    <div>
      <Light></Light>
    </div>
  )
}

// LCA
function Light(){
  const [isLightOn, toggleLight] = useState(false);

  return (
    <div>
      <LightBulb isLightOn={isLightOn} />
      <LightButton isLightOn={isLightOn} toggleLight={toggleLight} />
    </div>
  )
}

function LightBulb({ isLightOn }){
  return (
    <div>
      { isLightOn ?  <h2>BULB IS ON!!</h2> : <h2>BULB IS OFF!!</h2>}   
    </div>
  )
}

function LightButton({ isLightOn, toggleLight }){
  return(
    <button onClick={() => toggleLight(!isLightOn)}>{ isLightOn? "OFF" : "ON"}</button>
  )
}
