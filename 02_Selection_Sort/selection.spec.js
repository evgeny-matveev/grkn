'use strict'

const selectionSort = require('./selection')

describe('Selection Sort Test Suit', () => {

  it('should sort arrays of numbers', () => {
    const unsortedArray = [ 43, 1, 32, -23, 3, 99, 2 ]
    expect(selectionSort(unsortedArray)).toEqual([ -23, 1, 2, 3, 32, 43, 99 ])
  })

  it('should sort arrays of letters', () => {
    const unsortedArray = [ 'a', 'f', 'z', 'b' ]
    expect(selectionSort(unsortedArray)).toEqual([ 'a', 'b', 'f', 'z' ])
  })

})
