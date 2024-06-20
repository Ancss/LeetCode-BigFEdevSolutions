function maxSubArray(nums: number[]): number {
  if (nums.length <= 1) {
    return nums[0];
  }
  let local = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (const num of nums) {
    local = Math.max(num, local + num);
    if (local > max) {
      max = local;
    }
  }

  return max;
}
// console.log(maxSubArray([-2, -1])); // -1
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
