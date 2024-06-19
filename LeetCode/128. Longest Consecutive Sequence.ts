function longestConsecutive(nums: number[]): number {
  // make sure nums is not empty
  if (nums.length <= 1) return nums.length;
  const set = new Set(nums);
  let max = 0;

  for (let num of nums) {
    if (set.has(num + 1)) {
      continue;
    }
    if (set.has(num - 1)) {
      let current = num;
      let n = 0;
      while (set.has(current--)) {
        n++;
      }
      max = Math.max(max, n);
    }
  }
  return nums.length > 1 && max === 0 ? 1 : max;
}
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0]));
