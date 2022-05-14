//GLOBAL SCOPE
// th3e keyword var is bound to the window object and is globally scoped

// Bad practice to rely on global scoped variables
  // leads to issues down the linne

// BLOCK SCOPE
// let and const are block scoped

// Between the curly brackets of function
// If you want to access a variable that is block scoped,
  // instead of declaring it globally, create the variables
  // globally and update within the function


let cool;
if (1 === 1) {
  cool = true;
}

console.log(cool)

// more complicated:

function isCool( ) {
  let cool;
  if (1 === 1) {
    cool = true;
  }

  console.log(cool)
}

// ...
function isCool(name) {
  let cool;
  if (name === 'Wes') {
    cool = true;
  }
  console.log(cool)
  return cool
}

// JS IS A LEXICALLY SCOPED LANGUAGE or static scoped
// scope or variable loockups depends on where they are defined


// Function scoping
