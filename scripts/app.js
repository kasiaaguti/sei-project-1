
//this is where the player starts

//Math.floor(width * width / 100)
console.log('does it work?')
const width = 10
const squares = []
let playerIndex = 0
let activeTetromino = 'I'
// const tetrominos = ['I', 'O', 'T', 'J', 'L', 'S', 'Z']


// class tetromino {
//   constructor(name) {
//     this.name = name
//     this.position(name)
//
//   }
//
// position(name) {
//     const positions = {
//       I: [3, 4, 5, 6],
//       O: [4, 5, 14, 15],
//       T: [4, 13, 14, 15],
//       J: [3, 13, 14, 15],
//       L: [5, 13, 14, 15],
//       S: [6, 5, 15, 14],
//       Z: [4, 5, 15, 16]
//     }
//   }
// }



const tetromino = {
  type: 'I',
  position: [3, 4, 5, 6]
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




const grid = document.querySelector('.grid')

let currentShapeHorizontal = true


function movePlayer() {
  console.log('happening')
  squares.forEach(square => square.classList.remove('player'))
  if (tetromino.type === 'I') {
    tetromino.position = tetromino.position.map(pos => pos + 1)
    tetromino.position.forEach(number => squares[number].classList.add('player'))
    // if (currentShapeHorizontal) {
    //   squares[playerIndex].classList.add('player')
    //   squares[playerIndex+1].classList.add('player')
    //   squares[playerIndex+2].classList.add('player')
    //   squares[playerIndex+3].classList.add('player')
    // } else {
    //   squares[playerIndex].classList.add('player')
    //   squares[playerIndex+width*1].classList.add('player')
    //   squares[playerIndex+width*2].classList.add('player')
    //   squares[playerIndex+width*3].classList.add('player')
    // }
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
        currentShapeHorizontal = false
      }
  }
}


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



function handleKeyDown(e) {
  movePlayer()
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
  tetromino.position.forEach(number => squares[number].classList.add('player'))
  movePlayer()
}

window.addEventListener('keydown', handleKeyDown)
window.addEventListener('keydown', rotate)


window.addEventListener('DOMContentLoaded', init)
