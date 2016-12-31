'use strict'

function selectionSort(arr, acc = []) {
    if (!arr.length) {
        return acc
    }
    const smallest = arr.reduce((a, b) => a > b ? b : a)

    return selectionSort(arr.filter(i => i !== smallest), [...acc, smallest])
}

module.exports = selectionSort
