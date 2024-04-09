// Given an unsorted array of integers which might have duplicates, return the top k integers in non-ascending order.

topK([1, 10, 8, 9, 10, 2, 3, 4, 8, 8, 6], 4)
// // [10, 10, 9, 8]
// What is the time & space cost of your code ? Could you do better ?

function topK(arr: number[], k: number): number[] {
  return arr.sort((a, b) => b - a).slice(0, k)
}
