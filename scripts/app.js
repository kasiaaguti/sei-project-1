
const height = 20
const width = 10
const limit = height * width
const squares = []
let divIndex = []
let activeTetromino = {}

const isTetronimoActive = false
const drop = setInterval(automaticDrop, 1000)

const tetromino = [
  {type: 'I', position: [3, 4, 5, 6], orientation: 0},
  {type: 'J', position: [13, 14, 15, 25],orientation: 0},
  {type: 'L', position: [16, 15, 14, 24], orientation: 0},
  {type: 'T', position: [13, 14, 15, 4], orientation: 0},
  {type: 'S', position: [6, 5, 15, 14], orientation: 0},
  {type: 'Z', position: [4, 5, 15, 16], orientation: 0},
  {type: 'O', position: [4, 5, 14, 15], orientation: 0}
]


function rotate() {
  activeTetromino.orientation += 90
  if (activeTetromino.orientation > 270) {
    activeTetromino.orientation = 0
  }
  if (activeTetromino.type === 'J') {
    if (activeTetromino.orientation === 90) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.orientation === 180) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] + 0
    } else if (activeTetromino.orientation === 270) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    }
  } else if (activeTetromino.type === 'L') {
    if (activeTetromino.type === 'L' && activeTetromino.orientation === 90) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 180) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 270) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 0
    }
  }
}

const grid = document.querySelector('.grid')


function generateTetromino (){
  console.log('generateTetromino')
  const tetrominoNumber = Math.floor(Math.random() * tetromino.length)

  const newTetronimo = tetromino[tetrominoNumber]
  newTetronimo.isActive = true
  console.log(newTetronimo)
  return newTetronimo
  // activeTetromino.positions.forEach(position => divIndex.push(position))
}

function movePlayer() {
  console.log('movePlayer', activeTetromino)
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
      moveDown()
      break
    case 82:
      rotate()
      break
    default:
      playerShouldMove = false
  }
  if (playerShouldMove) movePlayer()
}

function init() {

  // get hold of that parent grid div
  const grid = document.querySelector('.grid')

  // setGrid()
  // used a for loop to fill my grid with induvidual squares, as many as the width times the width
  for (let i = 0 ; i < width * height; i++) {
    const square = document.createElement('div')
    square.classList.add('grid-item')
    square.innerHTML = i
    squares.push(square)
    grid.append(square)
    square.id = 'div' + i
  }


  // createNewTeronimo()
  activeTetromino = new generateTetromino()
  // tetromino.position.forEach(number => squares[number].classList.add('player'))



  movePlayer()
  drop

}


// createNewTeronimo() {
//     giveID
//
// }

function moveDown() {
  if (activeTetromino.isActive && activeTetromino.position.every(pos => pos + 10 < limit)) {
    activeTetromino.position = activeTetromino.position.map(x => x + 10)
  } else {
    activeTetromino.isActive = false
    console.log('activeTetromino set to false')
    return
  }

}

function freezeTetronimo(t) {
  clearInterval(drop)
  t.position.forEach(number => squares[number].classList.add('freeze'))
  t.position.forEach(number => squares[number].classList.remove('player'))

  // createNewTeronimo
}

function automaticDrop() {
  moveDown()
  movePlayer()
  if ( !activeTetromino.isActive ) {

    freezeTetronimo(activeTetromino)
  }
}

window.addEventListener('keydown', handleKeyDown)


// setInterval(generateTetromino, 5000)

window.addEventListener('DOMContentLoaded', init)
