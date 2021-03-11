interface Location {
  x: number
  y: number
}

export type CellType = {[K in keyof Cell]: Cell[K]}

export const defaultCellLocation = { x: 0, y: 0 }

export default class Cell {
  alive: boolean
  location: Location
  private _numberOfNeighbours: number

  constructor(alive: boolean, location: Location, numberofNeighbours = 0) {
    this.alive = alive
    this.location = location
    this._numberOfNeighbours = numberofNeighbours
    this.updateStatus = this.updateStatus.bind(this)
  }

  public set numberOfNeighbours(value: number) {
    this._numberOfNeighbours = value
  }

  updateStatus() {
    if (this.alive && (this._numberOfNeighbours < 2 || this._numberOfNeighbours > 3)) {
      this.alive = false
    }
    if (!this.alive && this._numberOfNeighbours === 3) {
      this.alive = true
    }
  }
}
