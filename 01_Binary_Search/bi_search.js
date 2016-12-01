'use strict'

const binarySearch = (
  arr,
  target,
  low = 0,
  high = arr.length - 1
) => {
  const guess = Math.round((low + high) / 2)

  if (arr[guess] === target) {
    return guess
  } else {
    if (low <= high) {
      return arr[guess] > target ?
        binarySearch(arr, target, low, guess - 1) :
        binarySearch(arr, target, guess + 1, high)
    } else {
      throw new Error(`${target} is not present in the array.`)
    }
  }
}

module.exports = binarySearch
