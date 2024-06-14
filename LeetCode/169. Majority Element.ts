function majorityElement(nums: number[]): number {
  let count = 0;
  let candidate = 0;
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }
  return candidate;
}

console.log(majorityElement([1, 3, 1, 1, 4, 1, 1, 5, 1, 1, 6, 2, 2, 2, 2]));
// console.log(majorityElement([6, 5, 5]));
// console.log(majorityElement([3, 3, 4]));
// console.log(majorityElement([2, 2, 1, 1, 1, 1, 2, 2]));
