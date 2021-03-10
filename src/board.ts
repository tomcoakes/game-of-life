import Cell from './cell'

export default class Board {
  size: number
  cells: Cell[] = [new Cell(true), new Cell(true), new Cell(true)]

  constructor(size: number) {
    this.size = size
  }
}
