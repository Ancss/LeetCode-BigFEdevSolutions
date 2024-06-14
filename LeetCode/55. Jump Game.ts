function canJump(nums: number[]): boolean {
  // make sure nums has at least 1 elements
  if (nums.length < 1) return false;
  let lastJump = nums.length - 1;
  for (let i = lastJump - 1; i > 0; i--) {
    if (nums[i] >= lastJump - i) {
      lastJump = i;
    }
  }
  return nums[0] >= lastJump;
}

function canJumpDP(nums: number[]): boolean {
  const n = nums.length;
  const dp = new Array(n).fill(false);
  dp[0] = true;

  for (let i = 0; i < n; i++) {
    if (dp[i]) {
      for (let j = 1; j <= nums[i] && i + j < n; j++) {
        dp[i + j] = true;
      }
    }
  }
  return dp[n - 1];
}

function canJumpGreedy(nums: number[]): boolean {
  let maxReach = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    if (i > maxReach) return false;
    maxReach = Math.max(maxReach, i + nums[i]);
    if (maxReach >= n - 1) return true;
  }
  return false;
}
const nums1 = [3, 2, 1, 0, 4];
console.log(canJump(nums1));
console.log(canJumpDP(nums1));
console.log(canJumpGreedy(nums1));
export {};
