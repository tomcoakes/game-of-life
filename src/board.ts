import Cell, { CellType } from './cell'

export default class Board {
  size: number
  cells: CellType[]

  constructor(size: number, liveCells: number = 3) {
    this.size = size
    this.cells = generateCells(size, liveCells)
    this.updateCells = this.updateCells.bind(this)
  }

  updateCells() {
    this.cells = generateCells(this.size, 20)
  }
}

export function generateCells(numSquared: number, liveCells: number): CellType[] {
  let output: CellType[] = []
  let temp: number[] = []

  for (let x = 0; x < numSquared; x++) {
    for (let y = 0; y < numSquared; y++) {
      output.push(new Cell(false, { x, y }))
    }
  }

  for (let i = 0; i < liveCells; i++) {
    setCellToAlive(Math.floor(Math.random() * (output.length - 0) + 0))
  }

  return output

  function setCellToAlive(randomNumber: number) {
    if (!temp.includes(randomNumber)) {
      temp.push(randomNumber)
      output[randomNumber].alive = true
    } else {
      setCellToAlive(Math.floor(Math.random() * (output.length - 0) + 0))
    }
  }
}
