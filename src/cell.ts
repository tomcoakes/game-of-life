interface Location {
  x: number
  y: number
}

export const defaultCellLocation = { x: 0, y: 0 }

export default class Cell {
  alive: boolean
  location: Location

  constructor(alive: boolean, location: Location) {
    this.alive = alive
    this.location = location
  }
}
