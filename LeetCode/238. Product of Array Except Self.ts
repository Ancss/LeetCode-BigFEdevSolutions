function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const left = new Array(n).fill(1);
  const right = new Array(n).fill(1);
  const answer = new Array(n).fill(1);

  // Calculate left array
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  console.log(left);
  // Calculate right array
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }
  console.log(right);
  // Calculate answer array
  for (let i = 0; i < n; i++) {
    answer[i] = left[i] * right[i];
  }

  return answer;
}
console.log(productExceptSelf([1, 2, 3, 4]));
