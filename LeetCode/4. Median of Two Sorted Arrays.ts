function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let array1;
  let array2;

  if (nums1.length < nums2.length) {
    array1 = nums1;
    array2 = nums2;
  } else {
    array1 = nums2;
    array2 = nums1;
  }

  let totalLength = array1.length + array2.length;
  let halfLength = Math.floor(totalLength / 2);
  let leftIndex = 0;
  let rightIndex = array1.length - 1;

  while (true) {
    let index1 = Math.floor((leftIndex + rightIndex) / 2);
    let index2 = halfLength - index1 - 2;

    let leftA1 = index1 >= 0 ? array1[index1] : Number.MIN_SAFE_INTEGER;
    let leftA2 = index2 >= 0 ? array2[index2] : Number.MIN_SAFE_INTEGER;
    let rightA1 =
      index1 + 1 < array1.length ? array1[index1 + 1] : Number.MAX_SAFE_INTEGER;
    let rightA2 =
      index2 + 1 < array2.length ? array2[index2 + 1] : Number.MAX_SAFE_INTEGER;

    if (leftA1 <= rightA2 && leftA2 <= rightA1) {
      if (totalLength % 2) {
        return Math.min(rightA1, rightA2);
      } else {
        return (Math.max(leftA1, leftA2) + Math.min(rightA1, rightA2)) / 2;
      }
    } else if (leftA1 > rightA2) {
      rightIndex = index1 - 1;
    } else {
      leftIndex = index1 + 1;
    }
  }
}
