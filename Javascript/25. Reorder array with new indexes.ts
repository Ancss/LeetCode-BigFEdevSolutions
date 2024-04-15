// Suppose we have an array of items - A, and another array of indexes in numbers - B

const A = ['A', 'B', 'C', 'D', 'E', 'F']
// ['B','A' , 'C', 'D', 'E', 'F']
// ['F','A' , 'C', 'D', 'E', 'B']
// ['F','A' , 'E', 'D', 'C', 'B']
const B = [1, 5, 4, 3, 2, 0]
// [5, 1, 4, 3, 2, 0]
// [0, 1, 4, 3, 2, 5]
// [0, 1, 2, 3, 4, 5]
// You need to reorder A, so that the A[i] is put at index of B[i], which means B is the new index for each item of A.

// For above example A should be modified inline to following

// ['F', 'A', 'E', 'D', 'C', 'B']
// The input are always valid.

// follow-up

// It is fairly easy to do this by using extra O(n) space, could you solve it with O(1) space?

/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
  for(let i =0;i<newOrder.length;i++){
    while(i!==newOrder[i]){
      swap(items,i,newOrder[i])
      swap(newOrder,i,newOrder[i])
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

sort(A, B)
console.log(A, B)
