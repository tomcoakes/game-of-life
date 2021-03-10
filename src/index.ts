import Game from './game'

const gameOfLife = new Game()

document.getElementById('game-status').innerText = 'Game is not active'

document.getElementById('toggle-game-status').addEventListener('click', () => {
  gameOfLife.isGameRunning ? gameOfLife.stop() : gameOfLife.start()
  toggleGameStatus()
})

function toggleGameStatus() {
  if (gameOfLife.isGameRunning) {
    document.getElementById('game-status').innerText = 'Game is active'
  } else {
    document.getElementById('game-status').innerText = 'Game is not active'
  }
}
