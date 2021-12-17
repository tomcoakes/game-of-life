import Board from './board'

export default class Game {
  isGameRunning = false
  private _clockTime = 0
  timer: NodeJS.Timeout
  board: Board

  constructor(board: Board = new Board(5)) {
    this.board = board
    this.nextTick = this.nextTick.bind(this)
  }

  public get clockTime() {
    return this._clockTime
  }

  start() {
    this.isGameRunning = true
    this.timer = setInterval(this.nextTick, 50)
  }

  stop() {
    this.isGameRunning = false
    clearInterval(this.timer)
  }

  nextTick() {
    this._clockTime = this.clockTime + 1
    this.board.updateCells()
  }
}
