// Even for Front-End Engineer, it is a must to understand how basic sorting algorithms work.

// Now you are asked to implement Quick Sort, which sorts an integer array in ascending order.

// Do it in-place, no need to return anything.

// Follow-up

// What is time cost for average / worst case ? Is it stable?

function quickSort(arr: number[]) {
  if (arr.length <= 1) { return arr }
  const leftArr: number[] = []
  const rightArr: number[] = []
  const pivot = arr[arr.length - 1]

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      rightArr.push(arr[i])
    } else {
      leftArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}


const a = [4, 2, 100, 99, 10000, -1, 99, 2]
//[-1,2,2,4,99,99,100,10000]
//[-1,2,2,4,99,99,100,10000]
console.log(quickSort(a))
export { }