function lengthOfLIS(nums: number[]): number {
  let values: Array<number> = [];
  values[0] = 1;
  let max = -1;
  for (let i = 1; i < nums.length; i++) {
    values[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        values[i] = Math.max(values[i], values[j] + 1);
        max = Math.max(max, values[i]);
      }
    }
  }
  console.log(values);
  return max;
}
console.log(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]));
