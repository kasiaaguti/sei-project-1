
//this is where the player starts
//Math.floor(width * width / 100)
console.log('does it work?')
const width = 10
const squares = []
let playerIndex = 0
// let activeTetromino = 'I'
// const tetrominos = ['I', 'O', 'T', 'J', 'L', 'S', 'Z']


let tetromino = {
  type: 'I',
  position: [3, 4, 5, 6],
  rotation: 0
}
// let tetromino = {
//   type: 'J',
//   position: [3, 13, 14, 15],
//   rotation: 0
// }
// let tetromino = {
//   type: 'L',
//   position: [5, 13, 14, 15],
//   rotation: 0
// }
// let tetromino = {
//   type: 'T',
//   position: [4, 13, 14, 15],
//   rotation: 0
// }
// let tetromino = {
//   type: 'S',
//   position: [6, 5, 15, 14],
//   rotation: 0
// }
// let tetromino = {
//   type: 'Z',
//   position: [4, 5, 15, 16],
//   rotation: 0
// }
// let tetromino = {
//   type: 'O',
//   position: [4, 5, 14, 15],
//   rotation: 0
// }

// //define tetraminos
// const tetrominoNumber = Math.floor(Math.random() * 6)
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
  squares[playerIndex].classList.add('player')
  if (tetromino.type === 'I') {
    tetromino.position.forEach(number => squares[number].classList.add('player'))
    squares[playerIndex].classList.add('player')
    squares[playerIndex+1].classList.add('player')
    squares[playerIndex+2].classList.add('player')
    squares[playerIndex+3].classList.add('player')
  }
}
function rotate(e) {
  switch(e.keyCode) {
    case 77:
      if (tetromino.type === 'I') {
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
