// Please implement your own Array.prototype.map().




// please avoid using Array.prototype.map() directly in your code.

// copied from lib.es5.d.ts
declare interface Array<T> {
  myMap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: T[]): U[];
}


Array.prototype.myMap = function (callback, thisArg) {
  const length = this.length
  const result: any[] = new Array(length)
  for (let i = 0; i < length; i++) {
    if ((i) in this) {
      result[i] = callback.call(thisArg, this[i], i, this)
    }
  }
  return result
}

const res = [1, 2, 3].myMap(num => num * 2)
// [2,4,6]