# 20. Rolling up the state, unoptimal re-renders
- as your application grows, you might find it that multiple components need access to the same state. Instead of duplicating state in each component, you can lift the state up to the LCA (Lowest Common Ancestor), allowing the common ancestor to manage it
- take example of Bulb component -> has two children - Light & Switch. Light Needs (isBulbOn) and Switch needs (isBulbOn & toggleBulb)
- so need to roll up the state variables to the LCA Light component so that these can be passed to the child components as props.

# 21. Prop Drilling 
- occurs when u need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree.
- Issues: 
    - *Complexity* - have to pass the props through multiple intermediate components that don't use the props themselves, just to get them to the component that need them
    - *Maintainance* - Makes code harder to maintain - as changes in the props structure require updates in multiple components 

# 22. Context API 
- Context API is a powerful feature in react that enables you to manage state across the application more effectively - especially dealing with deeply nested components.  
- Context API provides a way to share values (state, functions, etc.) bw components without having to pass props down manually at every level
- **Jargon**:= 
    - `Context`: this is created using `React.createContext()` - serves as a container for the data you want to share
    - `Provider`: this component wraps parts of your application and provides context value to all its descendents. Any component that is a child of this Provider can access the context
    - `Consumer`: component subscribes to context changes - allows you to access the context value using `useContext` hook
