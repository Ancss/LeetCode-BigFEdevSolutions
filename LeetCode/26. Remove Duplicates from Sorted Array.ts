// function removeDuplicates(nums: number[]): number {
//   const map = new Map<number, boolean>();
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       map.set(nums[i], true);
//     }
//   }
//   return nums.length;
// }
function removeDuplicates(number: number[]): number {
  let k = 0;
  let isDuplicate = false;
  // i always move fast one step than k
  // and then k will catch up with i when number[i] !== number[k]
  // calculate how much times change the value of number[k]
  for (let i = 1; i < number.length; i++) {
    if (number[i] !== number[k]) {
      k++;
      if (isDuplicate) {
        number[k] = number[i];
        isDuplicate = false;
      }
    }
    isDuplicate = true;
  }
  return k + 1;
}

// function removeDuplicates(number: number[]): number {
//   // if just calculate the change number[k] times
//   let k = 0;
//   let i = 1;
//   while (i <= number.length) {
//     if (number[i] !== number[i - 1]) {
//       k++;
//     }
//     i++;
//   }
//   return k;
// }
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
