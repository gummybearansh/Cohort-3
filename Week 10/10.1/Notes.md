# 15. Single Page Applications (SPAs) and Routing
- SPAs are web applications that load a single HTML page and dynamically update the page as user interacts with the app
- Smoother UX Compared to traditional MPAs where each interaction requires often requires a full page reload
- Libarary for routing - `https://reactrouter.com`
  `npm install react-router-dom`

# 16. Layouts
- Layouts let you 'wrap' every route inside a certain component (think headers and footers)

# 17. useRef
- a hook that provides a way to create a reference to a value or DOM element that persists across renders but does not trigger a re-render when the value changes 
## Key Characteristics of useRef:
- *Persistent across renders*: The value stored in `useRef` persists bw component re-renders. This means the value of a `ref` does not get reset when the component re-renders, unlike regular variables
- *No Re-Renders on Change*: Changing the value of a ref (`ref.current`) does not cause a component to re-render. this is different from state (`useState`) which triggers a re-render when updated
