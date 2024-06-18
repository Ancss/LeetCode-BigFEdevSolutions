function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let left = 0;
  let right = 0;
  let result = Infinity;

  while (right < nums.length) {
    sum += nums[right++];
    while (sum >= target) {
      result = Math.min(result, right - left);
      sum -= nums[left++];
    }
  }

  return result === Infinity ? 0 : result;
}
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
