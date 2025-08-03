// DOM (Document Object Model) 
// is a programming interface for web documents. it represents the structure of a page as a tree of objects. (document object is available globally when viewing webpages on a website);
// WHY DOM? 
// the DOM abstracts the structure of the document into a tree of objects, allowing scripts to manipulate the contents and structure dynamically. 
// this abstraction enables more complex interactions and functionalities beyond just static HTML

// Static HTML -> represents HTML that does not change.  

// Dynamic HTML -> Dynamically Fetching, Altering, Creating and Deleting HTML on a page

// 1. Fetching Elements 
//      -> querySelector() -> returns the first element within the document that matches the specified "CSS Selector". if no matches -> null is returned
//      -> querySelectorAll() -> node list (static) of all the elements of that selector. 
//      -> getElementById()
//      -> getElementByClassName()

// selector for id -> "#heading1" (id will be unique to access only that html element)
// for class -> ".heading1" (class -> multiple elements to have similar styles)
// for input box -> element.value;
// for h1, div everything else -> element.innerHTML;

// 2. Updating elements 
//      -> element.innerHTML ->  h1, h2...p.. etc = "new value here to change on page"
//      -> inputElement.value -> Same as above

// 3. Deleting Elements 
//      -> removeChild() - removes a specific node of a parent
// basically can't delete element khud se -> need to select the parent and delete its child


// 4. Creating Elements
//      -> createElement() -> creates element outside the DOM
//      -> appendChild() -> the new created element needs to be added to a parent
