// If you use React, you would meet the scenario to copy the state for a slight change.

// For example, for following state

// const state = {
//     a: {
//       b: {
//         c: 1
//       }
//     },
//     d: 2
//   }
// if we are to modify d to a new state, we could use _.cloneDeep, but it is not efficient because state.a is cloned while we don't need to change that.

// A better way is to do shallow copy like this

// const newState = {
//   ...state,
//   d: 3
// }
// now is the problem, if we want to modify c, we would have to do something like

// const newState = {
//   ...state,
//   a: {
//     ...state.a,
//     b: {
//       ...state.b,
//       c: 2
//     }
//   }
// }
// We can see that for simple data structure it would be enough to use spread operator, but for complex data structures, it is verbose.

// Here comes the Immutability Helper, you are asked to implement your own Immutability Helper update(), which supports following features.

// 1. { $push: array } push() all the items in array on the target.
// const arr = [1, 2, 3, 4]
// const newArr = update(arr, { $push: [5, 6] })
// // [1, 2, 3, 4, 5, 6]
// 2. { $set: any } replace the target
// const state = {
//   a: {
//     b: {
//       c: 1
//     }
//   },
//   d: 2
// }

// const newState = update(
//   state,
//   { a: { b: { c: { $set: 3 } } } }
// )
// /*
// {
//   a: {
//     b: {
//       c: 3
//     }
//   },
//   d: 2
// }
// */
// Notice that we could also update array elements with $set

const arr = [1, 2, 3, 4]
const newArr = update(
  arr,
  { 0: { $set: 0 } }
)
console.log(newArr)
// //  [0, 2, 3, 4]
// 3. { $merge: object } merge object to the location
// const state = {
//   a: {
//     b: {
//       c: 1
//     }
//   },
//   d: 2
// }

// const newState = update(
//   state,
//   { a: { b: { $merge: { e: 5 } } } }
// )
// /*
// {
//   a: {
//     b: {
//       c: 1,
//       e: 5
//     }
//   },
//   d: 2
// }
// */
// 4. { $apply: function} custom replacer
// const arr = [1, 2, 3, 4]
// const newArr = update(arr, { 0: { $apply: (item) => item * 2 } })
// [2, 2, 3, 4]


type Command = {
  $push?: any,
  $set?: any
  $apply?: (arg: any) => any
  $merge?: object
  [key:number]:Command
}
function update(data: object, command: Command): void {

  const recursive = (data, command, parentKey = '', parentData = {}) => {
    for (let [key, value] of Object.entries(command)) {
      if (key === '$push') {
        data = myCommand[key](data, value)
      } else if (key === '$set') {
        data = { ...data, ...myCommand[key](parentData, parentKey, value) }
      } else if (key === '$apply') {
        data[key] = myCommand[key](value, data[key])
      } else if (key === '$merge') {
        data = { ...data, ...myCommand[key](key, value) }

      }
      else if (typeof data[key] === 'object') {
        recursive(data[key], command[key], key, data)
      }
    }
    return data
  }
  return recursive(data, command)
}
const myCommand = {
  $push(data, ...args) {
    data.push(...args.flat())
    return data
  },
  $set(data, key, value) {
    if (Array.isArray(data)) {
      data[key] = value

    } else {
      data = {
        ...data,
        key: value
      }
    }
  },
  $apply(fn, v) {
    return fn(v)
  },
  $merge(key, value) {
    return { [key]: value }

  }
}