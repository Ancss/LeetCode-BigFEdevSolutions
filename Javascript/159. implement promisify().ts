// Let's take a look at following error-first callback.

// const callback = (error, data) => {
//   if (error) {
//     // handle the error
//   } else {
//     // handle the data
//   }
// }
// Now think about async functions that takes above error-first callback as last argument.

// const func = (arg1, arg2, callback) => {
//   // some async logic
//   if (hasError) {
//     callback(someError)
//   } else {
//     callback(null, someData)
//   }
// }
// You see what needs to be done now. Please implement promisify() to make the code better.

// const promisedFunc = promisify(func)

// promisedFunc().then((data) => {
//   // handles data
// }).catch((error) => {
//   // handles error
// })

/**
 * @param {(...args) => void} func
 * @returns {(...args) => Promise<any}
 */
function promisify(cb: (...args: any) => void) {
  return function (this: any, ...args: any) {
    cb = cb.bind(this)
    return new Promise((resolve, reject) => {
      cb(...args, (error: any, data: unknown) => error ? reject(error) : resolve(data))
    })
  }
}

function func(this: any, arg1: any, arg2: any, arg3: any, callback: (arg0: null, arg1: any) => void) {
  setTimeout(() => {
    callback(null, (this).foo)
  }, 50)
}

const obj = {
  foo: 'BFE',
  promisified: promisify(func)
}

obj.promisified(1, 2, 3).then((data) => {
  console.log(data)
})
export { }