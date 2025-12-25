// 1 - Starting react project locally - VITE
// - build tool, 2 major parts 1 - dev server w rich enhancements over native ES modules (like HMR) 2 - build command that bundles your code with 'Rollup' ? pre-configured to output highly optimised static assets for production
// npm create vite@latest

// 2 - Components
// building blocks of the Ui, they allow to split the ui into independent, reusable pieces that can be thought of as custom, self-contained HTML elements

// 6 - Props
// Props are the way to pass data from one component to another (basically passing variables like function parameters)

// 7 - Conditional Rendering
// { condition && (component)}
// { condition ? (component if true} : (component if false))}

// 3 - Use State
// hook that lets u add state to functional components, it returns an array with the current state and a function to update it

// 4 - Re-Rendering
// state variables are basically being "watched" by React, if state variable gets changed (can only change it by calling the setVariable which u get when u call useState) then react automatically renders the update (by calculating the 'diff')

// 5 - useEffect
// first understand "Side Effects"
// - operations tht interact with the outside world, or have effects outside the component's rerendering. ex:
//  - fetching from api
//  - modifying DOM manually
//  - Subscribing to events (Websocket events, timers, browser events)
//  - Starting a clock
// these are called side effects because they don't just compute the output based on the input - they affect the things outside the component itself
// problem in running 'side effects' inside React components:
// if u introduce effects directly in the rendering logic of the component - React would run that code every time the component re-renders leading to:
// - Unnecessary or duplicate effects (multiple api calls, clocks)
// - Inconsistent behaviour (side effects may happen before rendering finishes)
// - performance issues (side effects blocking rendering, excessive re-rendering)

// useEffect
// useEffect(() => {
//     // code here is the "effect" - this is where the side effects happen
//     fetchData();
//
//     // optionally, return a cleanup function that runs when a component unmounts
//     return () => {
//         // cleanup code: eg: unsubscribing from an event or clearing timers
//     }
// }, [ /* dependencies */])
//
// the first argument to useEffect is the effect function, where u put the code that performs the side effect
// second argument is the dependencies array - which controls when the effect runs this array tells React to re-run the effect only when certain values (props or state) change. if you leave it empty - the effect runs only when the component is mounted (once during initial renders)
// optional cleanup: if side effect needs cleanup - ex: unsubscribing from a WebSocket, clearing intervals - useEffect allows u to return a function that react will call when the component unmounts or before re-running the effect

// 8 - Children
// the 'children' prop allows you to pass elements or components as props to other components

// 9 - Lists and keys

// 11 - Class Based vs Functional Components 
// Earlier react code was written using 'Class Based Components'
// cannot use any hooks (useState, useEffect) in class based - they're meant for functional components
import React, { Component } from 'react'

class Counter extends Component { 
  // pretty much will store entire state of this component in this state object 
  state = { count: 0 };

  increment = () => {
    // pretty convoluted 
    this.setState({ count: this.state.count + 1}) 
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

// 12 - Error Boundary 
// Error boundaries are React Components that catch JS errors in their child component tree and display a fallback ui 
// Only works in class-based components for now ( not in functional yet )
// see ErrorBoundary component
//
// 13 - Fragments in react
// A component can return a single parent element, but it can contain multiple children within that single parent;
// first principles thinking - a function can only return one thing right - return 2 2??  
// one solution is just wrapping the thigns u want inside a parent div
// but if you're adamant about wanting the 2 seperate divs itslef then u can use fragments 
// so fragment is this <></> 
// now the things inside the fragment will appear like seperate children inside the parent 'root' container


