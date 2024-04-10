// This is a follow-up on 1. implement curry()

// please implement curry() which also supports placeholder.

// Here is an example
export { }
interface Curry {
  (fn: (...args: any[]) => any): (...args: any[]) => any,
  placeholder: Symbol
}

const curry: Curry = (fn) => {
  return function curryInner(...args) {
    args = args.filter(arg => arg !== curry.placeholder)
    console.log(args)
    if (args.length >= fn.length) {
      return fn(...args)
    }
    return (...args2: any[]) => curryInner(...args, ...args2)
  }
}


curry.placeholder = Symbol()


const join = (a: number, b: number, c: number) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
const _ = curry.placeholder

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(_, 2)(1, 3) // '1_2_3'

// curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'

console.log(curry(join)(_,_,3,4)(1,_)(2,5))