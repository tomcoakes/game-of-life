import Game from '../src/game'

beforeEach(() => {
  jest.useFakeTimers()
})

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

  it('begins with the clock time at 0', () => {
    const newGame = new Game()
    expect(newGame.clockTime).toEqual(0)
  })

  it('starts the timer when the game starts', () => {
    const newGame = new Game()
    newGame.start()
    jest.advanceTimersByTime(3000)
    expect(newGame.clockTime).toEqual(3)
  })

  it('stops the timer when the game stops', () => {
    const newGame = new Game()
    newGame.start()
    jest.advanceTimersByTime(3000)
    newGame.stop()
    jest.advanceTimersByTime(3000)
    expect(newGame.clockTime).toEqual(3)
  })
})
