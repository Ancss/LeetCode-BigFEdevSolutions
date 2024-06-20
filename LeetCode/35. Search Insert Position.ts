function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return nums[mid] >= target ? mid : mid + 1;
}
console.log(searchInsert([1, 3, 5, 6], 0));
