// function twoSum(numbers: number[], target: number): number[] {
//   for (let i = 0; i < numbers.length - 1; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//       if (numbers[i] + numbers[j] === target) {
//         return [i + 1, j + 1];
//       }
//     }
//   }
//   return []
// }

// function twoSum(numbers: number[], target: number): number[] {
//   const map = {}
//   for(let i = 0;i<numbers.length;i++){
//     if(map[target-numbers[i]] ){
//       return [map[target-numbers[i]],i+1]
//     }
//     map[numbers[i]] = i+1
//   }
//   return []
// };

function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const addition = target - numbers[i];

    const index2 = binarySearch(i + 1, addition, numbers);

    if (!!index2 && i < index2) {
      return [i + 1, index2 + 1];
    }
  }

  return [-1, -1];
}

function binarySearch(
  startIndex: number,
  target: number,
  source: number[]
): number | null {
  let left = startIndex;
  let right = source.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const candidate = source[middle];

    if (target === candidate) {
      return middle;
    }

    if (candidate > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return null;
}
