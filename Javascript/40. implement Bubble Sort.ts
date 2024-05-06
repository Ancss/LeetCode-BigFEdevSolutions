// Even for Front - End Engineer, it is a must to understand how basic sorting algorithms work.

// Now you are asked to implement Bubble Sort, which sorts an integer array in ascending order.

// Do it in -place, no need to return anything.

//   Follow - up

// What is time cost for average / worst case ? Is it stable ?


/**
 * @param {number[]} arr
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
      console.log(arr,i,j)
    }
  }
}

const a = [4, 100,  10000, -1, 99, 2]
bubbleSort(a)
// [ 4, 100, 10000, -1, 99, 2 ] 0 1
// [ 4, 100, 10000, -1, 99, 2 ] 0 2
// [ -1, 100, 10000, 4, 99, 2 ] 0 3
// [ -1, 100, 10000, 4, 99, 2 ] 0 4
// [ -1, 100, 10000, 4, 99, 2 ] 0 5
// [ -1, 100, 10000, 4, 99, 2 ] 1 2
// [ -1, 4, 10000, 100, 99, 2 ] 1 3
// [ -1, 4, 10000, 100, 99, 2 ] 1 4
// [ -1, 2, 10000, 100, 99, 4 ] 1 5
// [ -1, 2, 100, 10000, 99, 4 ] 2 3
// [ -1, 2, 99, 10000, 100, 4 ] 2 4
// [ -1, 2, 4, 10000, 100, 99 ] 2 5
// [ -1, 2, 4, 100, 10000, 99 ] 3 4
// [ -1, 2, 4, 99, 10000, 100 ] 3 5
// [ -1, 2, 4, 99, 100, 10000 ] 4 5


export { }
