// This problem is similar to 11. what is Composition? create a pipe().

// You are asked to implement an async function helper, sequence() which chains up async functions, like what pipe() does.

// All async functions have following interface

// type Callback = (error: Error, data: any) => void

// type AsyncFunc = (
//    callback: Callback,
//    data: any
// ) => void
// Your sequence() should accept AsyncFunc array, and chain them up by passing new data to the next AsyncFunc through data in Callback.

// Suppose we have an async func which just multiple a number by 2

// const asyncTimes2 = (callback, num) => {
//    setTimeout(() => callback(null, num * 2), 100)
// }
// Your sequence() should be able to accomplish this

// const asyncTimes4 = sequence(
//   [
//     asyncTimes2,
//     asyncTimes2
//   ]
// )

// asyncTimes4((error, data) => {
//    console.log(data) // 4
// }, 1)
// Once an error occurs, it should trigger the last callback without triggering the uncalled functions.

// Follow up

// Can you solve it with and without Promise?

/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs) {
  const promisedFuncs = funcs.map(promisify)
  return (callback, initValue) => {
    let promise = Promise.resolve(initValue)
    promisedFuncs.forEach(promisedFunc => {
      promise = promise.then(data => {
        return promisedFunc(data)
      })
    })
    promise.then(data => {
      callback(null, data)
    }).catch(callback)

  }
}
function promisify(cb) {
  return function (value) {
    return new Promise((resolve, reject) => {
      cb((err, data) => {
        if (err) {
          reject(err)
          return
        }
        resolve(data)

      }, value)
      resolve(undefined)

    })
  }
}
const thunk = sequence([times2, times3, plus2])
thunk((error, data) => {
  console.log(data)
}, 1)
function times2(n) {
  return n * 2
}
function times3(n) {
  return n * 3
}
function plus2(n) {
  return n + 2
}