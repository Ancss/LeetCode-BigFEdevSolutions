// In 12. implement Immutability helper, we are asked to implement immutability helpers.

// These helpers requires extra effort for us to remember how to use them, while Immer takes another approach which might be easier to use.

// For example, we have a base state as below.

// const state = [
//   {
//     name: 'BFE',
//   },
//   {
//     name: '.',
//   }
// ]
// We can use produce() to patch our modification and get a new state.

// const newState = produce(state, draft => {
//   draft.push({name: 'dev'})
//   draft[0].name = 'bigfrontend'
//   draft[1].name = '.' // set with the same value
// })
// Unchanged parts are not cloned.

// expect(newState).not.toBe(state);
// expect(newState).toEqual(
//   [
//     {
//       name: 'bigfrontend',
//     },
//     {
//       name: '.',
//     },
//     {
//       name: 'dev'
//     }
//   ]
// );
// expect(newState[0]).not.toBe(state[0])
// expect(newState[1]).toBe(state[1])
// expect(newState[2]).not.toBe(state[2])
// Please implement your produce().

// This is not to recreate Immer, test cases only cover the basic usage.
// You only need to support basic usage on plain object and array, things like Map/Set, Auto freezing .etc are out of scope.
// You need to make sure unchanged parts are not cloned.

type ProduceFunc = <T>(base: T, receipe: (draft: T) => any) => any

const produce: ProduceFunc = (base: any, recipe) => {
  let clone = JSON.parse(JSON.stringify(base))
  recipe(clone)
  patch()
  function patch(): void {
    function compare(base: any, clone: any, cb: (v: any, v2: any, key: string) => void): boolean {
      if (typeof base !== typeof clone) return false
      if (typeof base !== 'object') {
        return base === clone
      }
      let equal = true
      // console.log(clone)
      for (let [key, value] of Object.entries(clone)) {
        if (base[key] !== undefined) {
          if (compare(base[key], clone[key], cb)) {
            cb(base, clone, key)
          } else {
            equal = false
          }
        } else {
          equal = false
        }
      }
      for (let [key] of Object.entries(base)) {
        if (!(clone[key] !== undefined)) {
          equal = false
        }
      }
      return equal
    }
    const isSame = compare(base, clone, (base: any, clone: any, key: string) => {
      clone[key] = base[key]
    })
    if (isSame) {
      console.log('11111111111', isSame)
      clone = base
    }

  }
  console.log(clone === base)
  return clone
}

const state = {
  a: {
    b: {
      c: 'BFE'
    },
  }
}
const newState = produce<typeof state>(state, (draft) => {
  draft.a.b.c = 'BFE'

})

console.log(newState === state)
// console.log(newState.a !== state.a)
// console.log(newState.a.b !== state.a.b)
// console.log(newState.a.d === state.a.d)
// console.log(newState.g === state.g)

console.log(newState)