// I believe you've used JSON.stringify() before, do you know the details of how it handles arbitrary data?

// import { detectType } from "./20. Detect data type in JavaScript";

// Please have a guess on the details and then take a look at the explanation on MDN, it is actually pretty complex.

// In this problem, you are asked to implement your own version of JSON.stringify().

// In a real interview, you are not expected to cover all the cases, just decide the scope with interviewer. But for a goal of practicing, your code here will be tested against a lot of data types. Please try to cover as much as you can.

// Attention to the circular reference.

// note

// JSON.stringify() support two more parameters which is not required here.

// Don't use JSON.stringify() in your code here, it doesn't help you practicing coding skills.
function detectType(data) {
  return Object.prototype.toString.call(data).slice(8, -1).toLowerCase()
}
function isNaN2(n) {
  return Number(n) === Number(n)
}
function stringify(data) {
  const type = detectType(data)
  switch (type) {
    case 'regexp':
      return '{}'
    case 'date':
      return `"${(data).toISOString()}"`
    case 'function':
      return undefined
    case 'array':
      return `[${data.map(item => detectType(item) === 'symbol' ? 'null' : stringify(item)).join(',')}]`

    case 'map':
      const res = Object.entries(data)
      if (res.length) {
        return `{${res.map(([key, value]) => `"${key}":${stringify(value)}`).join(',')}}`
      }
      return `{}`
    case 'set':
      return `{}`
    case 'symbol':
      return undefined
    case 'object':
      return `{${Object.entries(data).filter(([key, value]) => value !== undefined).map(([key, value]) => `"${key}":${detectType(value) === 'symbol' ? 'null' : stringify(value)}`
      ).join(',')}}`
    case 'string':
      return `"${data}"`
    default:
      if (data === undefined) { return undefined }
      if (isNaN(data) || data === null || data === Infinity) {
        return "null"
      }
      return `${data} `
  }
}
const date = new Date()
const arr = [Symbol('key')]

console.log(stringify(arr))