function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const num = nums[mid];
    if (num < nums[mid + 1] && num < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
}
console.log(findMin([2, 3, 4, 5, 1]));
console.log(findMin([3, 4, 5, 1, 2]));
console.log(findMin([3, 1, 2]));
