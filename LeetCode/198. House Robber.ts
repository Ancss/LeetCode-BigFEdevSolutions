function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);
  let max = Math.max(nums[1], nums[0]);
  for (let i = 2; i < nums.length; i++) {
    nums[i] = max = Math.max(max, nums[i - 2] + nums[i]);
  }
  return max;
}
