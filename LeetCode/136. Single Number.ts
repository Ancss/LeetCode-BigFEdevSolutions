function singleNumber(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  let result = 0;
  for (const num of nums) {
    result ^= num;
  }
  return result;
}
