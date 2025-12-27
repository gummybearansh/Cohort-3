// chronological analysis 
// Render 1 (Mount) 
//  App renders - calls useFetch - useState creates new states - data = null & loading = true
//  React sees useEffect(, [url]) -> asks "have i run this before? " -> no? ok so sends request
//  hook returns data = null & loading = true
//  App renders the loading screen
//
// Fetch Finishes - setData(json) setLoading(false)
//  App Re-renders calls useFetch(url) again
//  useState checks 'notebook' (SINCE THIS IS A HOOK IT"S NOT JUST A NORMAL FUNCTION WITH NEW CALLSTACK")
//    ignores default values and grabs the latest ones -> data = json, loading = false
  //  useEffect sees 'url' -> since same as last time - SKIPS FUNCTION ENTIRELY -> if array was empty run only once (i have no dependencies) -> no array = always run - would have run the fetch again - needs the url to make sure on the second render fetch is not called again
  //  bug: if you had passed an object or an array in the url -> {path: "/todos"} - {} != {} in JS new objects are always "different" in memory - React thinks URL has changed and causes a re-render 

import { useEffect, useState } from "react";

//  hook returns {data = json, loading = false}
export function useFetch(url){
  // define a state to hold the data 
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch automatically when the hook is used
  useEffect(() => {
    // wraping function in () and then calling () to execute it instantly
    (async function (){
      const response = await fetch(url);
      const json = await response.json();

      setData(json);
      setLoading(false);
    })()
    // re-run when url changes
  }, [url])

  return {
    data, 
    loading
  }
}

