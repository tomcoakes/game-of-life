import Game from '../src/game'
import Board from '../src/board'

beforeEach(() => {
  jest.useFakeTimers()
})

describe('Game', () => {
  it('is created with no game running', () => {
    const newGame = new Game()
    expect(newGame.isGameRunning).toBe(false)
  })

  it('is created with a board size of 5 by default', () => {
    const newGame = new Game()
    expect(newGame.board.size).toEqual(5)
  })

  it('can be created with a custom board', () => {
    const newGame = new Game(new Board(10))
    expect(newGame.board.size).toEqual(10)
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
    expect(newGame.clockTime).toEqual(60)
  })

  it('stops the timer when the game stops', () => {
    const newGame = new Game()
    newGame.start()
    jest.advanceTimersByTime(3000)
    newGame.stop()
    jest.advanceTimersByTime(3000)
    expect(newGame.clockTime).toEqual(60)
  })

  it('updates the cells each time the clock ticks', () => {
    const newBoard = new Board(10)
    const spy = jest.spyOn(newBoard, 'updateCells')
    const newGame = new Game(newBoard)
    newGame.start()
    jest.advanceTimersByTime(3000)
    expect(spy).toHaveBeenCalled()
  })
})
