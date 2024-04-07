// Given an array of integers, move zeros to the end while keeping the order of the rest.

// You should make the in-place change.

// const list = [1,0,0,2,3]
// moveZeros(list) 
// console.log(list) // [1,2,3,0,0]
// What is the time & space complexity of your approach?

// This is a JavaScript coding problem from BFE.dev 
// https://bigfrontend.dev/problem/move-zeros

function moveZeros(list: number[]) {
  let left = 0
  let right = 0
  while (right < list.length) {
    if (list[right] !== 0) {
      [list[left], list[right]] = [list[right], list[left]]
      left++
    }
    right++
  }
  return list
}
// [1,0,0,2,3]
// [1,0,0,2,3]
const list = [1, 0, 0, 2, 3, 0, 4]
moveZeros(list)
console.log(list) // [1,2,3,0,0]