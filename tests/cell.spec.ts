import Cell from '../src/cell'

describe('Cell', () => {
  it('is created with a live status', () => {
    const newCell = new Cell(true)
    expect(newCell.alive).toEqual(true)
  })
})
