// the data for holding the slide page
let pageNumber = 0

// the content of pages
const pages = [
  { copy: "a UK-based web designer", bg: "#edc7a9", circle: "#3e78ed"},
  { copy: "the biggest pizza fan", bg: "#a1fffe", circle: "#e34a47"},
  { copy: "looking for a new job!", bg: "#d3c7f3", circle: "#f7fe00" },
  { copy: 'avaliable at <a href="http://barnacledesign.co.uk/">barnacle design</a>', bg: "#faffb8", circle: "#b472e6"}
]

// pick the tags
const nextTag = document.querySelector('footer img.next')
const randomTag = document.querySelector('footer img.random')
const previousTag = document.querySelector('footer img.prev')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

// increase pageNumber fn
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

// decrease pageNumber fn
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

// pick a random pageNumber fn
const random = function () {
  pageNumber = Math.floor( Math.random() * pages.length )
  
  updateSection()
}

// update the content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].bg
}

// on click of nextTag, run
nextTag.addEventListener('click', function() {
  next()
})

// on click of previousTag, run
previousTag.addEventListener('click', function() {
  previous()
})

// on click of randomTag, run
randomTag.addEventListener('click', function () {
  random()
})

// with the press of a key, check for arrow left and right
// do next or previous slide page
document.addEventListener("keyup", function (event) {
  console.log(event)
  
  // if the key is ArrowRight
  if (event.key == "ArrowRight") {
      next()
      }
  
  // if the key is ArrowLeft
  if (event.key == "ArrowLeft") {
      previous()
      }
  
  // if the key is r for Random
  if (event.key == "r") {
    random()
  }
})