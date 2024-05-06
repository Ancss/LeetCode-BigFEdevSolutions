// Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.

// Now you are asked to implement Merge Sort, which sorts an integer array in ascending order.

// Do it in-place, no need to return anything.

// Follow-up

// What is time cost for average / worst case ? Is it stable?

function selectionSort(arr: number[]) {
  if (arr.length <= 1) return arr
  const mid = Math.floor(arr.length / 2)
  const leftSort = selectionSort(arr.slice(0, mid))
  const rightSort = selectionSort(arr.slice(mid))
  const result = merge(leftSort, rightSort)
  for (let i = 0; i < result.length; i++) {
    arr[i] = result[i]
  }
  return result
}
function merge(leftSort: number[], rightSort: number[]) {
  const result: number[] = []
  while (leftSort.length && rightSort.length) {
    if (leftSort[0] < rightSort[0]) {
      result.push(leftSort.shift()!)
    } else {
      result.push(rightSort.shift()!)
    }
  }
  return [...result, ...leftSort, ...rightSort]

}

// [-1,2,2,4,99,99,100,10000]
const a = [4, 2, 100, 99, 10000, -1, 99, 2]
console.log(selectionSort(a))
console.log(a)

export { }