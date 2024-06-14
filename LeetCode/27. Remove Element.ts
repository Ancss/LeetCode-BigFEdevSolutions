function removeElement(nums: number[], val: number): number {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
}
const nums1 = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums1, 2)); // 5
console.log(nums1); // [0,1,3,0,4,0,4,2]

export {};
