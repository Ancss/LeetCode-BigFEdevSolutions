/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   for (let i = m; i < nums1.length; i++) {
//     nums1.splice(i, 1);
//     i--;
//   }
//   // make sure n is large than 0
//   if (n > 0) {
//     const maxLen = m + n;
//     // set current index
//     let i = 0;
//     while (nums1.length < maxLen && nums2.length > 0) {
//       let isBreak = false;
//       const firstNum2 = nums2.shift()!;
//       for (; i < nums1.length; i++) {
//         const currentNum1 = nums1[i];
//         if (firstNum2 < currentNum1) {
//           nums1.splice(i, 0, firstNum2);
//           isBreak = true;
//           break;
//         }
//       }
//       if (!isBreak) {
//         nums1.push(...[firstNum2, ...nums2]);
//       }
//     }
//   }
// }
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n);
  for (let i = 0; i < m + n; i++) {
    if (nums2.length === 0 || nums1[i] === undefined) {
      nums1.push(...nums2);
      break;
    }
    const firstNum2 = nums2[0]!;
    if (nums1[i] > firstNum2) {
      nums1.splice(i, 0, firstNum2);
      nums2.shift();
    }
  }
}
const nums1 = [1, 2, 3, 0, 0, 0];
merge(nums1, 3, [2, 5, 6], 3);
console.log(nums1);
