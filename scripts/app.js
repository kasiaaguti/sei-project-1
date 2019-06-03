//this is where the player starts

//Math.floor(width * width / 100)
console.log('does it work?')
const height = 20
const width = 10
const squares = []
const playerIndex = 0
let activeTetromino =[]

const tetromino = [
  {type: 'I', position: [3, 4, 5, 6]},
  {type: 'J', position: [3, 13, 14, 15]},
  {type: 'L', position: [5, 13, 14, 15]},
  {type: 'T', position: [4, 13, 14, 15]},
  {type: 'S', position: [6, 5, 15, 14]},
  {type: 'Z', position: [4, 5, 15, 16]},
  {type: 'O', position: [4, 5, 14, 15]}
]


const grid = document.querySelector('.grid')

function generateTetromino (){
  const tetrominoNumber = Math.floor(Math.random() * 7)
  return tetromino[tetrominoNumber]
}


function movePlayer() {
  console.log(activeTetromino)
  // console.log('happening')
  squares.forEach(square => square.classList.remove('player'))
  activeTetromino.position.forEach(number => squares[number].classList.add('player'))
  // if (tetromino.type) {
  //   // tetromino.position = tetromino.position.map(pos => pos + 10)
  //   tetromino.position.forEach(number => squares[number].classList.add('player'))
  //
  //
  //   // if (currentShapeHorizontal) {
  //   //   squares[playerIndex].classList.add('player')
  //   //   squares[playerIndex+1].classList.add('player')
  //   //   squares[playerIndex+2].classList.add('player')
  //   //   squares[playerIndex+3].classList.add('player')
  //   // } else {
  //   //   squares[playerIndex].classList.add('player')
  //   //   squares[playerIndex+width*1].classList.add('player')
  //   //   squares[playerIndex+width*2].classList.add('player')
  //   //   squares[playerIndex+width*3].classList.add('player')
  //   // }
  // }
}

function handleKeyDown(e) {
  let playerShouldMove = true
  switch(e.keyCode) {
    case 39:
      if (activeTetromino) {
        activeTetromino.position = activeTetromino.position.map(pos => pos + 1)
      }
      break
    case 37:
      if (activeTetromino) {
        activeTetromino.position = activeTetromino.position.map(pos => pos - 1)
      }
      break
    case 40:
      if (activeTetromino) {
        activeTetromino.position = activeTetromino.position.map(pos => pos + 10)
      }
      break
    default:
      playerShouldMove = false
  }
  if (playerShouldMove) movePlayer()
}


function rotate(e) {
	  switch(e.keyCode) {
	    case 77:
	      if (activeTetromino) {
	        squares.forEach(square => square.classList.remove('player'))
	        squares[playerIndex+2].classList.add('player')
	        squares[playerIndex+12].classList.add('player')
	        squares[playerIndex+22].classList.add('player')
	        squares[playerIndex+32].classList.add('player')
	        activeTetromino.position
	        currentShapeHorizontal = false
	      }
	  }
	}


function init() {
  //  our code goes here


  // get hold of that parent grid div
  const grid = document.querySelector('.grid')


  // used a for loop to fill my grid with induvidual squares, as many as the width times the width
  for (let i = 0 ; i < width * height; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.innerHTML = i
    squares.push(square)
    grid.append(square)
  }

  activeTetromino = generateTetromino()
  // tetromino.position.forEach(number => squares[number].classList.add('player'))
  movePlayer()
}


window.addEventListener('keydown', handleKeyDown)
window.addEventListener('keydown', rotate)


window.addEventListener('DOMContentLoaded', init)
