// Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.

// Now you are asked to implement Insertion Sort, which sorts an integer array in ascending order.

// Do it in-place, no need to return anything.

// Follow-up

// What is time cost for average / worst case ? Is it stable?


/**
 * @param {number[]} arr
 */
function insertionSort(arr: number[]) {

  for (let i = 1; i < arr.length; i++) {
    const insertionNum = arr[i]
    let j = i - 1
    while (j >= 0 && insertionNum < arr[j]) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = insertionNum
  }

}

const a = [4, 2, 100, 99, 10000, -1, 99, 2]
insertionSort(a)
export { }