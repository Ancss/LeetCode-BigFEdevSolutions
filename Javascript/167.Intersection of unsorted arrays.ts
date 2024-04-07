// Given two arrays, find the intersection(items occur in both arrays)

// arrays are not sorted, and might have duplicates.
// you can modify the arrays
// you can return the items in any order, but without duplicates.
// This is an easy problem, What is the time & space complexity of your approach?

function getIntersection(arr1: any[], arr2: any[]): any[] {
  const set1 = new Set(arr1)
  const result: any[] = []

  for (let item of set1) {
    if (arr2.includes(item)) {
      result.push(item)
    }
  }

  return result
}

const r = getIntersection([1, 2, 3], [3, 2, 1])
console.log(r)