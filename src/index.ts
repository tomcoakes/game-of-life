import Board from './board'
import Game from './game'

const gameOfLife = new Game(new Board(25, 60))

console.log('>>> board size: ', gameOfLife.board.size)
console.log('>>> board cells: ', gameOfLife.board.cells)

document.querySelector('table').innerHTML = renderStartingBoard()

paintCells()

document.getElementById('game-status').innerText = 'Game is not active'

document.getElementById('toggle-game-status').addEventListener('click', () => {
  gameOfLife.isGameRunning ? gameOfLife.stop() : gameOfLife.start()
  toggleGameStatus()
  setInterval(() => {
    resetCells()
    paintCells()
    document.getElementById('game-time').innerText = gameOfLife.clockTime.toString()
  }, 50)
})

function renderStartingBoard() {
  let board = ''
  for (let i = 0; i < gameOfLife.board.size; i++) {
    let row = ''
    for (let x = 0; x < gameOfLife.board.size; x++) {
      row = row + `<td class="${i}-${x}"></td>`
    }

    board = board + '<tr>' + row + '</tr>'
  }
  return board
}

function paintCells() {
  gameOfLife.board.cells
    .filter((cell) => cell.alive)
    .forEach((cell) => {
      const boardCell = document.getElementsByClassName(
        `${cell.location.x}-${cell.location.y}`,
      )[0]
      boardCell.classList.add('live')
    })
}

function resetCells() {
  gameOfLife.board.cells
    .forEach((cell) => {
      const boardCell = document.getElementsByClassName(
        `${cell.location.x}-${cell.location.y}`,
      )[0]
      boardCell.classList.remove('live')
    })
}

function toggleGameStatus() {
  if (gameOfLife.isGameRunning) {
    document.getElementById('game-status').innerText = 'Game is active'
  } else {
    document.getElementById('game-status').innerText = 'Game is not active'
  }
}
