function searchMatrix(matrix: number[][], target: number): boolean {
  let left = 0;
  let right = matrix.length - 1;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    const matrixItem = matrix[mid];
    if (
      matrixItem[matrixItem.length - 1] >= target &&
      matrixItem[0] <= target
    ) {
      break;
    } else if (matrixItem[0] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  const midMatrix = matrix[mid];
  left = 0;
  right = midMatrix.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (midMatrix[mid] < target) {
      left = mid + 1;
    } else if (midMatrix[mid] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}
