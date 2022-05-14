// FUNCTIONS

// Anonymous function:

// function (firstName) {
//   return `Dr ${firstName}`
// }

// Function Expression
const doctorize = function(firstName) {
  return `Dr. ${firstName}`
}

// VS.
// this one will be hoisted to the top of the page bc of the function keyword

function doctorize2(firstName) {
  return `Dr. ${firstName}`
}
// Which one above is better?? Has to do with Hoisting.
// All functions declared with the keyword and not stored in a variable
// Are hoisted to the top of the page as if declared in the first line.
// Allows for that function to be called without beign declared yet.
// Hoisting allows for functions to be called before being defined in the file


// ARROW FUNCTIONS

// Are always anonymous FUNCTIONS
// concise syntax
// cannot use this keyword??

function inchToCM (inches) {
  // const cm = inches * 2.54
  // return cm
  return inches * 2.54
}

 // VS

// explicit return
const inchToCM = inches => {
  return inces * 2.54
}

// implicet returns
const inchToCM = inches => inches * 2.54


// convert the below function to an arrow function:

function add (a,b = 3) {
  const total = a + b
  return total
}

// becomes:

const add = (a, b = 3) => a + b



// Returning an object
function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  return baby
}

// becomes:

const makeABaby = (first, last) => {
  return {
    name: `${first} ${last}`,
    age: 0
  }
}

// OR

const makeABaby = (first, last) => ({name: `${first} ${last}`, age: 0 })



//IIFE - immediately invoked functions

(function() {
  consoloe.log('Running the anon function!')
  return 'You are cool'
})();



// METHODS

// A method is a function that lives inside of an object
// .log is the function that lives inside of console - console.log;

const wes = {
  name: 'Wes Boss',

  // method
  sayHi: function() {
    console.log('Hey there')
    return 'Hey there'
  }

  // short hand method
  yellHi() {
    console.log('HEY WES!')
  }

  // arrow funcitons
  wisperHi: () => {
    console.log('hi wes')
  }
}


// CALLBACK functions

// when a user does something like click on a button
// or you want something to happen agter a certain amount of time has passed


const button = document.querySelector('.clickMe')

function handleClick() {
  console.log('Great Clicking')
}

button.addEventListener('click', function() {
  console.log('Nice job!')
})

//OR

button.addEventListener('click', handleClick)


// Timer CALLBACK

setTimeout(wes.yellHi, 1000)

// OR
setTimeout(function() {
  console.log('time to eat')
}, 1000)

//OR
setTimeout(() => {
  conosle.log('time to eat')
}, 1000)
