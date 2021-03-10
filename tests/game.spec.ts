import Game from '../src/game'

describe('Game', () => {
  it('is created with no game running', () => {
    const newGame = new Game()
    expect(newGame.isGameRunning).toBe(false)
  })

  it('status changes when game is started', () => {
    const newGame = new Game()
    newGame.start()
    expect(newGame.isGameRunning).toBe(true)
  })

  it('status changes when game is stopped', () => {
    const newGame = new Game()
    newGame.start()
    newGame.stop()
    expect(newGame.isGameRunning).toBe(false)
  })
})
