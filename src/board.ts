import Cell, { defaultCellLocation } from './cell'

export default class Board {
  size: number
  cells: Cell[]

  constructor(size: number, liveCells: number = 3) {
    this.size = size
    this.cells = generateCells(size, liveCells)
  }
}

export function generateCells(numSquared: number, liveCells: number): Cell[] {
  let output: { alive: boolean; location: { x: number; y: number } }[] = []
  let temp: number[] = []

  for (let x = 0; x < numSquared; x++) {
    for (let y = 0; y < numSquared; y++) {
      output.push({ alive: false, location: { x, y } })
    }
  }

  for (let i = 0; i < liveCells; i++) {
    setCellToAlive(Math.floor(Math.random() * (output.length - 0) + 0))
  }

  output.map((cell) => new Cell(cell.alive, cell.location))
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
