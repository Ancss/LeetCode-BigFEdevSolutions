// There is already Array.prototype.flat() in JavaScript (ES2019), which reduces the nesting of Array.

// Could you manage to implement your own one?

// Here is an example to illustrate

type Func = (arr: Array<any>, depth?: number) => Array<any>

const flat: Func = function (arr, depth = 1) {
  return depth ? arr.reduce((prev, next) => {
    return [...prev, ...Array.isArray(next) ? flat(next, depth - 1) : [next]]
  }, [])
    : arr
}

const arr = [1, [2], [3, [4]]];

console.log(flat(arr))
// [1, 2, 3, [4]]

flat(arr, 1)
// [1, 2, 3, [4]]

console.log(flat(arr, 2))
// [1, 2, 3, 4]
// follow up

// Are you able to solve it both recursively and iteratively?


