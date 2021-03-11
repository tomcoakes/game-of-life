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
})
