//this is where the player starts

//Math.floor(width * width / 100)
console.log('does it work?')
const height = 20
const width = 10
const squares = []
let divIndex = []
let activeTetromino = {}



const tetromino = [
  // {type: 'I', position: [3, 4, 5, 6], orientation: 0},
  {type: 'J', position: [13, 14, 15, 25],orientation: 0}
  // {type: 'L', position: [24, 14, 15, 16], orientation: 0},
  // {type: 'T', position: [4, 13, 14, 15], orientation: 0},
  // {type: 'S', position: [6, 5, 15, 14], orientation: 0},
  // {type: 'Z', position: [4, 5, 15, 16], orientation: 0},
  // {type: 'O', position: [4, 5, 14, 15], orientation: 0}
]

//
// rotation
// J 90 {-9, +0, +9, -2)
//   180 {+2, +0, -2, -22}
//   360 {+11, 0, -9, -19 }
//
// L 90 {-10, -9, +0, +9}
//   180 {-18, +2, +0, -2}
//   360 {+2, +11, +0, -9}
//
//

function rotate() {
  activeTetromino.orientation += 90
  if (activeTetromino.orientation > 270) {
    activeTetromino.orientation = 0
  }
  if (activeTetromino.type === 'J' && activeTetromino.orientation === 90) {
    activeTetromino.position[0] = activeTetromino.position[0] - 9
    activeTetromino.position[2] = activeTetromino.position[2] + 9
    activeTetromino.position[3] = activeTetromino.position[3] - 2
  }
}


const grid = document.querySelector('.grid')

function generateTetromino (){
  const tetrominoNumber = Math.floor(Math.random() * tetromino.length)
  return tetromino[tetrominoNumber]
  // activeTetromino.positions.forEach(position => divIndex.push(position))
}

function movePlayer() {
  console.log(activeTetromino)
  // console.log('happening')
  squares.forEach(square => square.classList.remove('player'))
  activeTetromino.position.forEach(number => squares[number].classList.add('player'))
}

function handleKeyDown(e) {
  let playerShouldMove = true
  switch(e.keyCode) {
    case 39:
      if (activeTetromino.position.every(pos => pos % width < width - 1)) {
        activeTetromino.position = activeTetromino.position.map(x => x + 1)
      }
      break
    case 37:
      if (activeTetromino.position.every(pos => pos % width > 0)) {
        activeTetromino.position = activeTetromino.position.map(x => x - 1)
      }
      break
    case 40:
      if (activeTetromino.position.every(pos => pos + 10 < 199)) {
        activeTetromino.position = activeTetromino.position.map(x => x + 10)
      }
      break
    case 82:
      rotate()
      break
    default:
      playerShouldMove = false
  }
  if (playerShouldMove) movePlayer()
}


// function rotate(e) {
// 	switch(e.keyCode) {
// 	  case 38:
// 	    if (activeTetromino) {
//
//
//       }
//       break
// 	}
//    movePlayer()
// }
  //   // if (currentShapeHorizontal) {
  //   //   squares[playerIndex].classList.add('player')
  //   //   squares[1].classList.add('player')
  //   //   squares[2].classList.add('player')
  //   //   squares[playerIndex+3].classList.add('player')
  //   // } else {
  //   //   squares[playerIndex].classList.add('player')
  //   //   squares[playerIndex+width*1].classList.add('player')
  //   //   squares[playerIndex+width*2].classList.add('player')
  //   //   squares[playerIndex+width*3].classList.add('player')
  //   // }
  // }
// }



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
    square.id = 'div' + i
  }

  activeTetromino = generateTetromino()
  // tetromino.position.forEach(number => squares[number].classList.add('player'))
  movePlayer()
}

//
// function runGame(){
// const interval = setInterval(tic, 200)
// runGame()
// }

window.addEventListener('keydown', handleKeyDown)
// window.addEventListener('keydown', rotate)



window.addEventListener('DOMContentLoaded', init)
