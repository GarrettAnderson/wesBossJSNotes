// Make a div
const div = document.createElement('div')

// add a class of wrapper to it
div.classList.add('wrapper')

// put it into the body
// const body = document.querySelector('body')
document.body.appendChild(div)

// make an unordered list
let ul = document.createElement('ul')
let li = document.createElement('li')
let li2 = document.createElement('li')
let li3 = document.createElement('li')
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper

li.textContent = 'one'
li2.textContent = 'two'
li3.textContent = 'three'

ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)
console.log(ul)

div.appendChild(ul)
console.log(div)


// create an image
let image = document.createElement('img')
// set the source to an image
image.src = 'https://source.unsplash.com/random/300x300'
// set the width to 250
image.width = '250'
// add a class of cute
image.classList.add('cute')
// add an alt of Cute Puppy
// Append that image to the wrapper

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above

// add a class to the second paragraph called warning
// remove the first paragraph

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
