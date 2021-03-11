import Board from '../src/board'

describe('Board', () => {
  it('is created with a size', () => {
    const newBoard = new Board(10)
    expect(newBoard.size).toEqual(10)
  })

  it('is created with 3 live cells by default', () => {
    const newBoard = new Board(5)
    const liveCells = newBoard.cells.filter(cell => cell.alive)
    const deadCells = newBoard.cells.filter(cell => !cell.alive)
    expect(liveCells).toHaveLength(3)
    expect(deadCells).toHaveLength(22)
  })

  it('can be created with a chosen number of live cells', () => {
    const newBoard = new Board(10, 5)
    const liveCells = newBoard.cells.filter(cell => cell.alive)
    expect(liveCells).toHaveLength(5)
  })
})
