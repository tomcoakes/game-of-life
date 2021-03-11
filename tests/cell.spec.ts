import Cell, { defaultCellLocation } from '../src/cell'

describe('Cell', () => {
  it('is created with a live status', () => {
    const newCell = new Cell(true, defaultCellLocation)
    expect(newCell.alive).toEqual(true)
  })

  it('has a location', () => {
    const newCell = new Cell(false, { x: 0, y: 0 })
    expect(newCell.location).toEqual({ x: 0, y: 0 })
  })

  describe('if the cell is alive', () => {
    it.each([
      ['no neighbours', 0],
      ['one neighbour', 1],
    ])('and has %s it dies', (_, neighbours) => {
      const newCell = new Cell(true, defaultCellLocation)
      newCell.numberOfNeighbours = neighbours
      expect(newCell.alive).toBe(false)
    })

    it.each([
      ['two neighbours', 2],
      ['three neighbours', 3],
    ])('and has %s it stays alive', (_, neighbours) => {
      const newCell = new Cell(true, defaultCellLocation)
      newCell.numberOfNeighbours = neighbours
      expect(newCell.alive).toBe(true)
    })

    it.each([
      ['four neighbours', 4],
      ['five neighbours', 5],
      ['six neighbours', 6],
      ['seven neighbours', 7],
      ['eight neighbours', 8],
    ])('and has %s it dies', (_, neighbours) => {
      const newCell = new Cell(true, defaultCellLocation)
      newCell.numberOfNeighbours = neighbours
      expect(newCell.alive).toBe(false)
    })
  })

  describe('if the cell is dead', () => {
    it.each([
      ['no neighbours', 0],
      ['one neighbour', 1],
      ['two neighbours', 2],
      ['four neighbours', 4],
      ['five neighbours', 5],
      ['six neighbours', 6],
      ['seven neighbours', 7],
      ['eight neighbours', 8],
    ])('and has %s it stays dead', (_, neighbours) => {
      const newCell = new Cell(false, defaultCellLocation)
      newCell.numberOfNeighbours = neighbours
      expect(newCell.alive).toBe(false)
    })

    it('and has three neighbours it comes to life', () => {
      const newCell = new Cell(false, defaultCellLocation)
      newCell.numberOfNeighbours = 3
      expect(newCell.alive).toBe(true)
    })
  })
})
