'use strict'

const binarySearch = require('./bi_search')

describe('Binary Search Test Suit', () => {
  it('should find items in sorted arrays', () => {
    const sortedArray = [1, 4, 5, 10, 14, 21, 22, 40]
    const target = 4

    expect(binarySearch(sortedArray, target)).toEqual(1)
  })

  it('should trows an error if target is not present', () => {
    const sortedArray = [1, 4, 5, 10, 14, 21, 22, 40]
    const target = 444

    expect(() => binarySearch(sortedArray, target)).toThrow(
      new Error(`${target} is not present in the array.`)
    );
  })
})
