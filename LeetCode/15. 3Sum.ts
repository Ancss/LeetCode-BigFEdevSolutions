function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b);
  const numsArr: number[][] = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const num = nums[i] + nums[left] + nums[right];
      if (num === 0) {
        numsArr.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (num > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return numsArr;
}

console.log(threeSum([-1, 0, 1, 2, -1, -2, 1, -4]));
// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
