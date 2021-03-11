import Cell, { defaultCellLocation } from './cell'

export default class Board {
  size: number
  cells: Cell[]

  constructor(size: number, liveCells: number = 3) {
    this.size = size
    this.cells = this.generateCells(size, liveCells)
  }

  generateCells(num: number, liveCells: number): Cell[] {
    let output: { alive: boolean; location: { x: number; y: number } }[] = []

    for (let x = 0; x < num; x++) {
      for (let y = 0; y < num; y++) {
        output.push({ alive: false, location: { x, y } })
      }
    }

    for (let i = 0; i < liveCells; i++) {
      output[Math.floor(Math.random() * (output.length - 0) + 0)].alive = true
      //@todo make sure that the same cell can't be made to be made live twice
    }

    output.map((cell) => new Cell(cell.alive, cell.location))
    return output
  }
}
