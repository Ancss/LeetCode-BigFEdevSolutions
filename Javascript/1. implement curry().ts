// Currying is a useful technique used in JavaScript applications.

// Please implement a curry() function, which accepts a function and return a curried one.

// Here is an example

const join = (a: any, b: any, c: any) => {
  return `${a}_${b}_${c}`
}

type Curry = (fn: (...args: any[]) => any) => (...args: any[]) => any

const curry: Curry = (fn) => {
  return function curryInner(...args) {
    if (args.length >= fn.length) return fn(...args)
    return (...args2) => curryInner(...args, ...args2)
  }
}
const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(1,)(2, 3))
console.log(curriedJoin(1, 2)(3))