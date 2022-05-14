//Global scope

// Bad practice to rely on global scoped variables
  // leads to issues down the linne

// Block scope

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
