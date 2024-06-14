// function rotate(nums: number[], k: number): void {
//   for(let i = 0; i < k; i++) {
//     nums.unshift(nums.pop()!);
//   }
// }
function rotate(nums: number[], k: number): void {
  let n = nums.length;
  k %= n;
  reserve(nums, 0, n - 1);
  console.log(nums);
  reserve(nums, 0, k - 1);
  console.log(nums);
  reserve(nums, k, n - 1);
}
function reserve(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

const nums1 = [1, 2, 3, 4, 5, 6, 7];
rotate(nums1, 3);
console.log(nums1);
export {};
