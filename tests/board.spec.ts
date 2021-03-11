import Board, { countNeighbours, generateCells } from '../src/board'
import Cell from '../src/cell'

describe('Board', () => {
  it('is created with a size', () => {
    const newBoard = new Board(10)
    expect(newBoard.size).toEqual(10)
  })

  it('is created with 3 live cells by default', () => {
    const newBoard = new Board(5)
    const liveCells = newBoard.cells.filter((cell) => cell.alive)
    const deadCells = newBoard.cells.filter((cell) => !cell.alive)
    expect(liveCells).toHaveLength(3)
    expect(deadCells).toHaveLength(22)
  })

  it('can be created with a chosen number of live cells', () => {
    const newBoard = new Board(10, 5)
    const liveCells = newBoard.cells.filter((cell) => cell.alive)
    expect(liveCells).toHaveLength(5)
  })

  it('can update its cells', () => {
    const newBoard = new Board(10, 5)
    const cellsBeforeUpdate = newBoard.cells
    newBoard.updateCells()
    expect(newBoard.cells).not.toEqual(cellsBeforeUpdate)
  })

  describe('generateCells', () => {
    it('always creates the correct amount of live cells', () => {
      expect(generateCells(10, 100).filter((cell) => cell.alive)).toHaveLength(100)
    })
  })

  describe('countNeighbours', () => {
    describe('when a cell has eight adjacent cells', () => {
      it.each([
        ['no neighbours', 0],
        ['one neighbour', 1],
        ['two neighbours', 2],
        ['three neighbours', 3],
        ['four neighbours', 4],
        ['five neighbours', 5],
        ['six neighbours', 6],
        ['seven neighbours', 7],
        ['eight neighbours', 8],
      ])('it can have %s', (_, neighbours) => {
        const newBoard = new Board(3, 0)
        for (let i = 0; i <= neighbours; i++) {
          if (i > 0 && i < 5) {
            newBoard.cells[i - 1].alive = true
          } else if (i > 0) {
            newBoard.cells[i].alive = true
          }
        }
        expect(countNeighbours(newBoard.cells, newBoard.cells[4])).toEqual(neighbours)
      })
    })

    describe('when a cell is on the top edge of the board', () => {
      it.each([
        ['no neighbours', 0],
        ['one neighbour', 1],
        ['two neighbours', 2],
        ['three neighbours', 3],
        ['four neighbours', 4],
        ['five neighbours', 5],
      ])('it can have %s', (_, neighbours) => {
        const newBoard = new Board(3, 0)
        for (let i = 0; i <= neighbours; i++) {
          if (i > 0 && i < 2) {
            newBoard.cells[i - 1].alive = true
          } else if (i > 1) {
            newBoard.cells[i].alive = true
          }
        }
        expect(countNeighbours(newBoard.cells, newBoard.cells[1])).toEqual(neighbours)
      })
    })

    describe('when a cell is on the bottom edge of the board', () => {
      it.each([
        ['no neighbours', 0],
        ['one neighbour', 1],
        ['two neighbours', 2],
        ['three neighbours', 3],
        ['four neighbours', 4],
        ['five neighbours', 5],
      ])('it can have %s', (_, neighbours) => {
        const newBoard = new Board(3, 0)
        for (let i = 0; i <= neighbours; i++) {
          if (i > 0 && i < 5) {
            newBoard.cells[i + 2].alive = true
          } else if (i > 0) {
            newBoard.cells[i + 3].alive = true
          }
        }
        expect(countNeighbours(newBoard.cells, newBoard.cells[7])).toEqual(neighbours)
      })
    })
  })
})

//@todo add tests for when cell is at the left or right edge of the board
