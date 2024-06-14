// function removeDuplicates(nums: number[]): number {
//   const map = new Map<number, number>();
//   for (let i = 0; i < nums.length; i++) {
//     const isExceedTwoTimes = map.has(nums[i]) && map.get(nums[i])! >= 2;
//     console.log(isExceedTwoTimes, nums[i], map.get(nums[i]));
//     if (isExceedTwoTimes) {
//       nums.splice(i, 1);
//       i--;
//     } else {
//       const times = map.get(nums[i]);
//       map.set(nums[i], (times || 0) + 1);
//     }
//   }
//   return nums.length;
// }

function removeDuplicates(nums: number[]): number {
  let duplicate = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      duplicate = 0;
    } else if (nums[i] === nums[i - 1] && duplicate === 1) {
      nums.splice(i, 1);
      i--;
    } else {
      duplicate++;
    }
  }
  return nums.length;
}

const nums1 = [1, 1, 1, 2, 2, 3];

console.log(removeDuplicates(nums1));
console.log(nums1);
export {};
