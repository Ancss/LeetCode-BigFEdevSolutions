// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object.It returns the target object. (source: MDN)

// It is widely used, Object Spread operator actually is internally the same as Object.assign()(source).Following 2 lines of code are totally the same.

// let aClone = { ...a };
// let aClone = Object.assign({}, a);
// This is an easy one, could you implement Object.assign() with your own implementation ?

//   note

// Don't use Object.assign() in your code It doesn't help improve your skills
function objectAssign(target, ...sources) {
  if (target == null) { throw new Error('target cannot be undefined or null') }
  target = Object(target)
  const targetDescriptors = Object.getOwnPropertyDescriptors(target)
  return sources.reduce((accumulate, source) => {

    if (source == null) {
      return accumulate
    }
    for (let [key, value] of Object.entries(source)) {
      if (targetDescriptors[key]?.writable === false) {
        throw Error(`${key} is not writable`)
      }
      accumulate[key] = value
    }

    for (let key of Object.getOwnPropertySymbols(source)) {
      accumulate[key] = source[key]
    }
    return accumulate
  }, target)

}

const key = Symbol('key')
const a = {
  [key]: 3,
  b: 4
}
// const target = Object.defineProperty({}, 'foo', {
//   value: 1,
//   writable: false
// }); // target.foo is a read-only property
// console.log((objectAssign(target, { bar: 2 },
//   { foo2: 3, foo: 3, foo3: 3 },
//   { baz: 4 })))
console.log(objectAssign({}, {a:3}, {b:4}))
// console.log(target)

export { }