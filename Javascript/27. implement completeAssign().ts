// This is a follow-up on 26. implement Object.assign().

// Object.assign() assigns the enumerable properties, so getters are not copied, non-enumerable properties are ignored.

// Suppose we have following source object.

const source = Object.create(
  {
    a: 3 // prototype
  },
  {
    b: {
      value: 4,
      enumerable: true // enumerable data descriptor
    },
    c: {
      value: 5, // non-enumerable data descriptor
    },
    d: { // non-enumerable accessor descriptor 
      get: function () {
        return this._d;
      },
      set: function (value) {
        this._d = value
      }
    },
    e: { // enumerable accessor descriptor 
      get: function () {
        return this._e;
      },
      set: function (value) {
        this._e = value
      },
      enumerable: true
    }
  }
)
// If we call Object.assign() with source of above, we get:


// console.log(source)
// console.log(source.e)
// console.log(Object.assign({}, source))

// // {b: 4, e: undefined}
// // e is undefined because `this._e` is undefined
// Rather than above result, could you implement a completeAssign() which have the same parameters as Object.assign() but fully copies the data descriptors and accessor descriptors?

// In case you are not familiar with the descriptors, this page from MDN might help.

// This problem is solely checking your understanding of how property descriptors work.

// Good luck
function completeAssign(target, ...sources) {
  if (target == null) { throw new Error('target cannot be undefined or null') }
  target = Object(target)
  return sources.reduce((accumulate, source) => {

    if (source == null) {
      return accumulate
    }
    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))

    for (let key of Object.getOwnPropertySymbols(source)) {
      accumulate[key] = source[key]
    }
    return accumulate
  }, target)
}
// console.log(completeAssign({}, source))

const a = {
  get b() {
    return 3
  }
}
const res = completeAssign({}, a)

console.log(Object.getOwnPropertyDescriptor(a, 'b'))
console.log(Object.getOwnPropertyDescriptor(res, 'b'))
export { }