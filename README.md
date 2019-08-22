
![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)
​
# TETRIS
​
-
# General Assembly Software Engineering Immersive: Project 1

This is my first project during the General Assembly Software Engineering Immersive course (Week 3). ​

## Brief
​
Design a game that works in the user's browser. Players must be able to win and lose. The game should be built using HTML5, CSS3, and JavaScript.
​
## Timeframe & Team
​
7 days, solo
​​
## Play it
​
It can be found here: https://kasiaaguti.github.io/sei-project-1/

## Technologies Used
| Category | List |
| ---- | --- |
| Languages                            | JavaScript (ECMAScript6), CSS3, HTML5 |
| Text Editor                          | Atom |
| Browser                              | Chrome |
| Version control | Git and GitHub
​
## Concept
​
Tetris is a puzzle game where the player has to fit different shaped blocks (called Tetriminos) together so that they make a complete line across the playing board. Once a line is achieved it is removed from the game board and the player's score is increased.

The player can move the Tetriminos left and right and rotate them clockwise in 90º increments.

The aim of the game is to get as many points as possible before the game board is filled with Tetriminos.

## Goal

Build an initial fully functional game. Practice how to think like a developer based on what we learned in week 1-3 of the course. Even things that seem simple now: How do I create create and move elements? How do I make them drop automatically without pressing the key?

## Process

**Working on rotation**

<br />

<img src="/images/rotation.jpeg" width="500">

```
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
    }
  ```  

**First element renders and moves**

<br />

<img src="/images/oneelement.jpeg" width="500">

## Visuals of the finished game

**This is my MVP**

<img src="/images/mvp.png" width="900">

**Generating a new Tetromino**
```
function generateTetromino (){
  gameOver()
  resetTetrominos()
  if (activeTetromino.isActive && activeTetromino.position.every(pos => isBlocked(pos + 10) === true)) {
    return
  }
  const tetrominoNumber = Math.floor(Math.random() * tetromino.length)
  const newTetronimo = tetromino[tetrominoNumber]
  return newTetronimo
  }
  ```
**Moving Tetrinos down**
```
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
```

**Freezing Tetrominos**
```
function freezeTetronimo(t) {
  // clearInterval(drop)
  t.position.forEach(number => squares[number].classList.add('freeze'))
  t.position.forEach(number => squares[number].classList.remove('player'))
  activeTetromino = generateTetromino()
  console.log('freezeTetromino', activeTetromino)
}
```

## Challenges

The larges challenge was the rotation of the Tetriminos. Each one rotates around a specific point on its axis.

Also some Tetriminos, particularly the long bar, create problems issues when turning next to the walls of the game board.

Furthermore, once a line has been made, the blocks above have to all shift down a row to fill the space, which requires a good amount of recursion.

## Moving Forward

Player can achieve higher levels and automatic drop speeds up

My game has a pretty simple graphics. Tetris was developed in 80s in Russia and I wanted to reflect that in a font and colour scheme. It definitely can be improved a lot.  
