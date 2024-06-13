type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  let newArr: MultiDimensionalArray = arr;
  // make sure arr is an array and n is a number
  if (!Array.isArray(arr) || !Number.isInteger(n)) {
    return [];
  }
  // loop the n times
  while (n--) {
    // use the spread operator to flatten the array
    newArr = [].concat(...(newArr as any[]));
  }
  return newArr;
};

export {};
