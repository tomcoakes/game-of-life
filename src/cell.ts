interface Location {
  x: number
  y: number
}

export default class Cell {
  alive: boolean
  location: Location

  constructor(alive: boolean, location: { x: number; y: number }) {
    this.alive = alive
    this.location = location
  }
}
