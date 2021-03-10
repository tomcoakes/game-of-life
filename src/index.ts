import Game from './game'

const gameOfLife = new Game()

document.querySelector('table').innerHTML = renderStartingBoard()

document.getElementById('game-status').innerText = 'Game is not active'

document.getElementById('toggle-game-status').addEventListener('click', () => {
  gameOfLife.isGameRunning ? gameOfLife.stop() : gameOfLife.start()
  toggleGameStatus()
})

function renderStartingBoard() {
  let board = ''
  for (let i = 1; i <= gameOfLife.board.size; i++) {
    let row = ''
    for (let x = 1; x <= gameOfLife.board.size; x++) {
      row = row + `<td class="${i}-${x}"></td>`
    }

    board = board + '<tr>' + row + '</tr>'
  }
  return board
}

function toggleGameStatus() {
  if (gameOfLife.isGameRunning) {
    document.getElementById('game-status').innerText = 'Game is active'
  } else {
    document.getElementById('game-status').innerText = 'Game is not active'
  }
}
