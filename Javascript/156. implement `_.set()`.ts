// _.set(object, path, value) is a handy method to updating an object without checking the property existence.

// Can you create your own set()?


// const obj = {
//   a: {
//     b: {
//       c: [1, 2, 3]
//     }
//   }
// }
// set(obj, 'a.b.c', 'BFE')
// console.log(obj.a.b.c) // "BFE"

// set(obj, 'a.b.c.0', 'BFE')
// console.log(obj.a.b.c[0]) // "BFE"

// set(obj, 'a.b.c[1]', 'BFE')
// console.log(obj.a.b.c[1]) // "BFE"

// set(obj, ['a', 'b', 'c', '2'], 'BFE')
// console.log(obj.a.b.c[2]) // "BFE"

// set(obj, 'a.b.c[3]', 'BFE')
// console.log(obj.a.b.c[3]) // "BFE"

// set(obj, 'a.c.d[0]', 'BFE')
// // valid digits treated as array elements
// console.log(obj.a.c.d[0]) // "BFE"

// set(obj, 'a.c.d.01', 'BFE')
// // invalid digits treated as property string
// console.log(obj.a.c.d['01']) // "BFE"

const isNaN = (v1: string, v2: string) => Number(v1) !== Number(v2)

function set<T extends object>(obj: T, path: string | string[], value: any) {
  let key = ''
  let lastObj: any = obj
  path = Array.isArray(path) ? path.join('.') : path
  for (let char of path) {
    if (char === '.') {
      if (lastObj[key] == null) {
        console.log(key)
        if (key.startsWith('0') && key.length > 1) {
          lastObj[key] = {}
        } else if (!isNaN(key, key)) {
          lastObj[key] = []
        } else {
          lastObj[key] = {}
        }
      }
      lastObj = lastObj[key]
      key = ''
    } else if (char === '[') {
      if (lastObj[key] == null) { lastObj[key] = [] }
      lastObj = lastObj[key]
      key = ''
    } else if (char === ']') { } else {
      key += char
    }
  }
  lastObj[key] = value
  console.log(lastObj)
}
function set2<T extends object>(obj: T, path: string | string[], value: any) {
  path = Array.isArray(path) ? path : path.replace('[', '.').replace(']', '').split('.');
  let src: any = obj;
  path.forEach((key, i) => {
    if (i === path.length - 1) {
      src[key] = value
    } else {
      if (!src.hasOwnProperty(key)) {
        const nextKey = path[i + 1]
        src[key] = String(Number(nextKey)) === nextKey ? [] : {}
      }
      src = src[key]
    }
  })
  console.log(JSON.stringify(obj,null,2))
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3]
    }
  }
}

set2(obj, 'a.c.d.1', 'BFE')

export { }
