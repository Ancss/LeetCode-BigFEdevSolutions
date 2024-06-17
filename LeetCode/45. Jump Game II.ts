function jump(nums: number[]): number {
  let jumps = 0;
  let currentEnd = 0;
  let farthest = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currentEnd) {
      jumps++;
      currentEnd = farthest;
      if (currentEnd >= nums.length - 1) {
        return jumps;
      }
    }
  }
  return jumps;
}

const nums1 = [31, 13, 1, 1, 4];
console.log(jump(nums1));
export {};
