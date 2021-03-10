import Board from '../src/board'

describe('Board', () => {
  it('is created with a size', () => {
    const newBoard = new Board(10)
    expect(newBoard.size).toEqual(10)
  })

  it('is created with 3 random live cells by default', () => {
    const newBoard = new Board(10)
    const liveCells = newBoard.cells.filter(cell => cell.alive)
    expect(liveCells).toHaveLength(3)
  })
})
