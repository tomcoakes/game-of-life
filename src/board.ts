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
    bringCellToLife(Math.floor(Math.random() * (output.length - 0) + 0))
  }

  output.map((cell) => {
    cell.numberOfNeighbours = countNeighbours(output, cell)
    return cell
  })

  return output

  function bringCellToLife(randomNumber: number) {
    if (!temp.includes(randomNumber)) {
      temp.push(randomNumber)
      output[randomNumber].alive = true
    } else {
      bringCellToLife(Math.floor(Math.random() * (output.length - 0) + 0))
    }
  }
}

export function countNeighbours(allCells: CellType[], rootCell: CellType) {
  const adjacentCells = allCells.filter((cell) => {
    return (
      (cell.location.x === rootCell.location.x ||
        cell.location.x === rootCell.location.x - 1 ||
        cell.location.x === rootCell.location.x + 1) &&
      (cell.location.y === rootCell.location.y ||
        cell.location.y === rootCell.location.y - 1 ||
        cell.location.y === rootCell.location.y + 1) &&
      cell.location !== rootCell.location
    )
  })

  return adjacentCells.filter(cell => cell.alive).length
}
