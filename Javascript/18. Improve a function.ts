// // Given an input of array, 
// // which is made of items with >= 3 properties

// let items = [
//   { color: 'red', type: 'tv', age: 18 },
//   { color: 'silver', type: 'phone', age: 20 },
//   { color: 'blue', type: 'book', age: 17 }
// ]

// // an exclude array made of key value pair
// const excludes = [
//   { k: 'color', v: 'silver' },
//   { k: 'type', v: 'tv' },
//   ...
// ]

// function excludeItems(items, excludes) {
//   excludes.forEach(pair => {
//     items = items.filter(item => item[pair.k] === item[pair.v])
//   })

//   return items
// } 

// What does this function excludeItems do?
//   Is this function working as expected ?
//     What is the time complexity of this function?
// How would you optimize it ?
//   note

// we only judge by the result, not the time cost.please submit the best approach you can.

/**
 * @param {object[]} items
 * @excludes { Array< {k: string, v: any} >} excludes
 */

/**
 * @param {object[]} items
 * @param { Array< {k: string, v: any} >} excludes
 * @return {object[]}
 */
function excludeItems(items, excludes) {
  const result: any[] = []
  for (let i = 0; i < items.length; i++) {
    const item = items[i]
    let flag = false
    for (let j = 0; j < excludes.length; j++) {
      const { k, v } = excludes[j]
      if (item[k] === v) {
        flag = true
      }
    }
    if (!flag) {
      result.push(item)
    }
  }
  return result
}

let items = [
  { color: 'red', type: 'tv', age: 18 },
  { color: 'silver', type: 'phone', age: 20 },
  { color: 'blue', type: 'book', age: 17 }
]

const excludes = [
  { k: 'color', v: 'silver' },
  { k: 'color', v: 'red' }
]
console.log(excludeItems(items, excludes))
export { }