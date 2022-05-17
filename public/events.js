// Diff between event.target vs event.currentTarget
// helful when there are children of a buttons
// event.currentTarget is the element that triggers the event addEventListener
//
//
//


// Propagation
// button event bubbles up to the top of the page??
    // to the parent elements until it reaches the document object
// event can still be triggered so must attach the method
    // event.stopPropagation()
// so that other events aren't triggered


// the 'this' keyword is NOT scoped to arrow functions
// dont use 'this' keyword on event callbacks

// use preventDefault method


// console.dir() will give more detail to console message

// always give your inputs a name attribute when building forms


// various types of events:
// keypup
// keydown
// focus
// blur
// mouseover
// etc.


// Accessibility

// do not use a href elements for buttons
// a href for links that navigate to another page
// if you will use an element as a button always include the role attribute
  // role='button'

//every key on the keyboard has its own event code
  // event.key
