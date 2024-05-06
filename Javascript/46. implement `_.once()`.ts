// _.once(func) is used to force a function to be called only once, later calls only returns the result of first call.

// Can you implement your own once()?

function func(this, b, c) {
  return this.a + b + c
}

// const onced = once(func)

// console.log(onced(1))
// // 1, func called with 1

// console.log(onced(2))
// 1, even 2 is passed, previous result is returned 

const onced = once(func)
const obj = {
  a: 1,
  onced
}
/**
 * @param {Function} func
 * @return {Function}
 */
console.log(obj.onced(2,3))
function once(func) {
  let flag = false
  let v = null
  return function (this, ...n) {
    if (!flag) {
      v = func.call(this, ...n)
      flag = true
      return v
    }
    return v
  }
}