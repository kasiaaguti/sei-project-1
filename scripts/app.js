
const height = 20
const width = 10
const limit = height * width
const squares = []
let divIndex = []
let activeTetromino = {}
// const isTetronimoActive = false
const drop = setInterval(automaticDrop, 1000)
const square = document.querySelectorAll('.grid-item')
const blocked = []
const rows = []
let blockedSquares = null

window.addEventListener('DOMContentLoaded', () => {

  const audio = document.querySelector('#audio')
  const playBtn = document.querySelector('#play')

  playBtn.addEventListener('click',() => {
    audio.src = 'audio/korobeiniki.mp3'

    audio.play()
  })
})


const startPositions = {
  'I': [16, 15, 14, 13],
  'J': [13, 14, 15, 25],
  'L': [16, 15, 14, 24],
  'T': [13, 14, 15, 4],
  'S': [6, 5, 15, 14],
  'Z': [14, 15, 25, 26],
  'O': [4, 5, 14, 15]
}

const tetromino = [
  {type: 'I', position: [16, 15, 14, 13], orientation: 0, isActive: true},
  {type: 'J', position: [13, 14, 15, 25],orientation: 0, isActive: true},
  {type: 'L', position: [16, 15, 14, 24], orientation: 0, isActive: true},
  {type: 'T', position: [13, 14, 15, 4], orientation: 0, isActive: true},
  {type: 'S', position: [6, 5, 15, 14], orientation: 0, isActive: true},
  {type: 'Z', position: [14, 15, 25, 26], orientation: 0, isActive: true},
  {type: 'O', position: [4, 5, 14, 15], orientation: 0, isActive: true}
]

function rotate(t) {
  activeTetromino.orientation += 10
  // if (activeTetromino.orientation > 360) {
  //   activeTetromino.orientation = startPositions[t.type]
  // }
  if (activeTetromino.type === 'J') {
    if (activeTetromino.orientation === 10) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.orientation === 20) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.orientation === 30) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'J' && activeTetromino.orientation === 40) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    } else if (activeTetromino.orientation === 50) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.orientation === 60) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.orientation === 70) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'J' && activeTetromino.orientation === 80) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    }
  } else if (activeTetromino.type === 'L') {
    if (activeTetromino.type === 'L' && activeTetromino.orientation === 10) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 20) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 30) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 40) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 50) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 60) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 70) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    } else if (activeTetromino.type === 'L' && activeTetromino.orientation === 80) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    }
  } else if (activeTetromino.type === 'I') {
    if (activeTetromino.type === 'I' && activeTetromino.orientation === 10) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 22
    } else if (activeTetromino.type === 'I' && activeTetromino.orientation === 20) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 22
    } else if (activeTetromino.type === 'I' && activeTetromino.orientation === 30) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 22
    } else if (activeTetromino.type === 'I' && activeTetromino.orientation === 40) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 22
    }
  } else if (activeTetromino.type === 'T') {
    if (activeTetromino.type === 'T' && activeTetromino.orientation === 10) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 11
    } else if (activeTetromino.type === 'T' && activeTetromino.orientation === 20) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] + 9
    } else if (activeTetromino.type === 'T' && activeTetromino.orientation === 30) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] - 11
    } else if (activeTetromino.type === 'T' && activeTetromino.orientation === 40) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] - 9
    }else if (activeTetromino.type === 'T' && activeTetromino.orientation === 50) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 11
    } else if (activeTetromino.type === 'T' && activeTetromino.orientation === 60) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] + 9
    } else if (activeTetromino.type === 'T' && activeTetromino.orientation === 70) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] - 11
    } else if (activeTetromino.type === 'T' && activeTetromino.orientation === 80) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] - 9
    }
  } else if (activeTetromino.type === 'Z') {
    if (activeTetromino.type === 'Z' && activeTetromino.orientation === 10) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.type === 'Z' && activeTetromino.orientation === 20) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.type === 'Z' && activeTetromino.orientation === 30) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'Z' && activeTetromino.orientation === 40) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    } else if (activeTetromino.type === 'Z' && activeTetromino.orientation === 50) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.type === 'Z' && activeTetromino.orientation === 60) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.type === 'Z' && activeTetromino.orientation === 70) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'Z' && activeTetromino.orientation === 80) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    }
  }else if (activeTetromino.type === 'S') {
    if (activeTetromino.type === 'S' && activeTetromino.orientation === 10) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'S' && activeTetromino.orientation === 20) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.type === 'S' && activeTetromino.orientation === 30) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.type === 'S' && activeTetromino.orientation === 40) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    }else if (activeTetromino.type === 'S' && activeTetromino.orientation === 50) {
      activeTetromino.position[0] = activeTetromino.position[0] - 11
      activeTetromino.position[2] = activeTetromino.position[2] - 9
      activeTetromino.position[3] = activeTetromino.position[3] + 2
    } else if (activeTetromino.type === 'S' && activeTetromino.orientation === 60) {
      activeTetromino.position[0] = activeTetromino.position[0] + 9
      activeTetromino.position[2] = activeTetromino.position[2] - 11
      activeTetromino.position[3] = activeTetromino.position[3] - 20
    } else if (activeTetromino.type === 'S' && activeTetromino.orientation === 70) {
      activeTetromino.position[0] = activeTetromino.position[0] + 11
      activeTetromino.position[2] = activeTetromino.position[2] + 9
      activeTetromino.position[3] = activeTetromino.position[3] - 2
    } else if (activeTetromino.type === 'S' && activeTetromino.orientation === 80) {
      activeTetromino.position[0] = activeTetromino.position[0] - 9
      activeTetromino.position[2] = activeTetromino.position[2] + 11
      activeTetromino.position[3] = activeTetromino.position[3] + 20
    }
  }
}





const grid = document.querySelector('.grid')

// function generateNewTetronimo() {
//
// }

function resetTetrominos(){
  tetromino.forEach(t => {
    t.isActive = true
    t.position = startPositions[t.type]
    t.orientation = 0
  })
}


// const tetrominoNumber = Math.floor(Math.random() * tetromino.length)
function generateTetromino (){
  resetTetrominos()
  const tetrominoNumber = Math.floor(Math.random() * tetromino.length)
  console.log(tetrominoNumber, 'random number')
  console.log('generateTetromino')


  const newTetronimo = tetromino[tetrominoNumber]

  console.log(tetromino.map(t => t.isActive))
  console.log('new', newTetronimo)
  return newTetronimo
}


function movePlayer() {
  // console.log('movePlayer', activeTetromino)
  // console.log('happening')
  squares.forEach(square => square.classList.remove('player'))
  activeTetromino.position.forEach(number => squares[number].classList.add('player'))

}


function handleKeyDown(e) {
  let playerShouldMove = true
  switch(e.keyCode) {
    case 39:
      if (activeTetromino.position.every(pos => pos % width < width - 1) && activeTetromino.position.every(pos => isBlocked(pos + 1) === false)) {
        activeTetromino.position = activeTetromino.position.map(x => x + 1)
      }
      break
    case 37:
      if (activeTetromino.position.every(pos => pos % width > 0) && activeTetromino.position.every(pos => isBlocked(pos - 1) === false)) {
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

  makeRows()

  activeTetromino = generateTetromino()

  movePlayer()

  blockedSquares = document.querySelectorAll('.freeze')

}


// createNewTeronimo() {
// giveID
// generateTetromino.
// }
// }
function moveDown() {
  console.log(activeTetromino.position.every(pos => isBlocked(pos +10)))
  if (activeTetromino.isActive && activeTetromino.position.every(pos => pos + 10 < limit) && activeTetromino.position.every(pos => isBlocked(pos +10) === false)) {
    activeTetromino.position = activeTetromino.position.map(x => x + 10)
  } else {
    activeTetromino.isActive = false
    console.log('activeTetromino set to false')
    return
  }
  checkRows()
}
// && square.classList.contains('freeze')
// && activeTetromino.position.every(pos => pos + 1 !== blockedSquares

function freezeTetronimo(t) {
  // clearInterval(drop)
  t.position.forEach(number => squares[number].classList.add('freeze'))
  t.position.forEach(number => squares[number].classList.remove('player'))
  activeTetromino = generateTetromino()
  console.log('freezeTetromino', activeTetromino)
}

function automaticDrop() {
  moveDown()
  movePlayer()
  if ( !activeTetromino.isActive ) {
    freezeTetronimo(activeTetromino)
  }
}


function isBlocked(number) {
  if (squares[number]){
    return squares[number].classList.contains('freeze')
  }
}
//
//   function topBorder() {
//     for (let i = squares.length+1; i < 0; i--) {
//       const position = playerIndexes[i]
//       if (position - width < 0) {
//         //console.log('cant go up')
//         return false
//       }
//     }
//     return true
//   }

function makeRows () {
  for (let i = 0; i < height; i++) {
    rows[i] = []
    for (let j = 0; j < width; j++) {
      rows[i].push(squares[(i * width) + j])
    }
  }
  console.log(rows)
}



function checkRows() {
  for(let i = 0; i < rows.length; i++){
    const row = rows[i].every(item => item.classList.contains('freeze'))
    if (row) {
      console.log(`Row ${i} is full`)
      rows[i].forEach(item => item.classList.remove('freeze'))
      rows[i].every(item => item.map(x => x + 10))

    }
  }
}






window.addEventListener('keydown', handleKeyDown)


window.addEventListener('DOMContentLoaded', init)
