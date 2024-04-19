// Even in Front-End review, basic algorithm technique like Binary Search are likely to be asked.

// You are given an unique & ascending array of integers, please search for its index with Binary Search.

// If not found, return -1

// note

// Please don't use Array.prototype.indexOf(), it is not our goal.

/**
 * @param {number[]} arr - ascending unique array
 * @param {number} target
 * @return {number}
 */
function binarySearch(arr, target) {
  let left = 0
  let right = arr.length - 1


  while (left <= right) {
    const mid = Math.floor((right + left) / 2)
    console.log(mid,right,left)
    if (arr[mid]===target) return mid
    if (target > arr[mid]) {
      left = mid 
    } else {
      right = mid - 1
    }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6],4))
