function search(nums: number[], target: number): number {
  if (nums.length === 0) return -1;

  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}
console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
console.log(search([1, 3, 5], 1));
console.log(search([3, 5, 1], 1));
console.log(search([4, 5, 1, 2, 3], 4));
console.log(search([4, 5, 6, 7, 0, 1, 2], 5));
