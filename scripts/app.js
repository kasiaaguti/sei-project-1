
//this is where the player starts
//Math.floor(width * width / 100)
console.log('does it work?')
const width = 10
const squares = []
let playerIndex = 0
let activeTetramino = 'I'
const tetrominos = ['I', 'O', 'T', 'J', 'L', 'S', 'Z']

// //define tetraminos
// const tetraminoNumber = Math.floor(Math.random() * 6)
//
// if (tetraminoNumber === 0) {
//   activeTetramino = 'I'


// }
// else if (tetraminoNumber === 1){
//   activeTetramino = 'O'
// }
// else if (tetraminoNumber === 2){
//   activeTetramino = 'T'
// }
// else if (tetraminoNumber === 3){
//   activeTetramino = 'S'
// }
// else if (tetraminoNumber === 4){
//   activeTetramino = 'Z'
// }
// else if (tetraminoNumber === 5){
//   activeTetramino = 'J'
// }
// else if (tetraminoNumber === 6){
//   activeTetramino = 'L'
// }
const grid = document.querySelector('.grid')


function movePlayer() {
  squares.forEach(square => square.classList.remove('player'))
//  squares[playerIndex].classList.add('player')
  if (activeTetramino === 'I') {
     squares[playerIndex].classList.add('player')
     squares[playerIndex+1].classList.add('player')
     squares[playerIndex+2].classList.add('player')
     squares[playerIndex+3].classList.add('player')
  }
}
function rotate(e) {
switch(e.keyCode) {
  case 77:
  if (activeTetramino === 'I') {
     squares.forEach(square => square.classList.remove('player'))
     squares[playerIndex+2].classList.add('player')
     squares[playerIndex+12].classList.add('player')
     squares[playerIndex+22].classList.add('player')
     squares[playerIndex+32].classList.add('player')
}
}
}





function handleKeyDown(e) {
  let playerShouldMove = true
  switch(e.keyCode) {
    case 39:
      if (playerIndex % width < width - 1) {
        playerIndex++
      }
      break
    case 37:
      if (playerIndex % width > 0) {
        playerIndex--
      }
      break
    case 38:
      if (playerIndex - width >= 0) {
        playerIndex -= 10
      }
      break
    case 40:
      if (playerIndex + 10 < 150) {
        playerIndex += 10
      }
      break
    default:
      playerShouldMove = false
  }
  if (playerShouldMove) movePlayer()
}

function init() {
  //  our code goes here


  // get hold of that parent grid div
  const grid = document.querySelector('.grid')

  // used a for loop to fill my grid with induvidual squares, as many as the width times the width
  for (let i = 0 ; i < 150; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.innerHTML = i
    squares.push(square)
    grid.append(square)
  }
     squares[playerIndex].classList.add('player')
   }

  window.addEventListener('keydown', handleKeyDown)
  window.addEventListener('keydown', rotate)


window.addEventListener('DOMContentLoaded', init)
