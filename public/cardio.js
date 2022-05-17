// Make a div
const div = document.createElement('div')
const body = document.querySelector('body')
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

// WES BOS ANSWER
// let ul2 = `
//  <ul>
//   <li>one</li>
//   <li>two</li>
//   <li>three</li>
// `
//  div.innerHTML = ul2

div.appendChild(ul)
// div.innerHTML = ul
console.log(div)


// create an image
let image = document.createElement('img')
// set the source to an image
image.src = 'https://source.unsplash.com/random/500'
// set the width to 250
image.width = '250'
// add a class of cute
image.classList.add('cute')
// add an alt of Cute Puppy
image.alt = 'Cute Puppy'
// Append that image to the wrapper
div.appendChild(image)
console.log(div)

// with HTML string, make a div, with two paragraphs inside of it

let string = `
  <div class='myDiv'>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </div>
`
// WES BOS ANSWER
const ulElement = div.querySelector('ul')
console.log(ulElement)
// put this div before the unordered list from above
// div.prepend(string) // This adds the string paragraph as an actual string and not an element to the DOM
// console.log(div)

// WES BOS ANSWER
ulElement.insertAdjacentHTML('beforebegin', string)

// add a class to the second paragraph called warning
let myDiv = div.querySelector('.myDiv')
// secondPara.classList.add('warning')
console.log(myDiv.children[1])
let selectedDiv = myDiv.children[1]
selectedDiv.classList.add('warning')
console.log(selectedDiv)
// remove the first paragraph

let removedDiv = myDiv.children[0]
removedDiv.remove()

console.log(myDiv)

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

function generatePlayerCard(name, age, height) {
  let ageInDogYears = age * 7
  return `
  <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${ageInDogYears}. That would be a tall dog!</p>
      <button class="delete" type="button">&times; Delete</button>
  </div>
  `
}

// make a new div with a class of cards
let cardsDiv = document.createElement('div')
// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('chris', 15, 34)
cardsHTML += generatePlayerCard('christy', 13, 34)
cardsHTML += generatePlayerCard('christine', 14, 34)
cardsHTML += generatePlayerCard('christopher', 12, 43)
console.log(cardsHTML)
// append those cards to the div

cardsDiv.insertAdjacentHTML('afterbegin', cardsHTML)
// cardsDiv.innerHTML = cardsHTML
console.log(cardsDiv)

// put the div into the DOM just before the wrapper element

div.insertAdjacentHTML('beforebegin', cardsDiv)

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!

const buttons = document.querySelectorAll('.delete')

// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget
  buttonThatGotClicked.parentElement.remove()
  // OR
  // buttonThatGotClicked.closest('.playerCard').remove()
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard))
