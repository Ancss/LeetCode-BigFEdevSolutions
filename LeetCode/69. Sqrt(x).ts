function mySqrt(x: number): number {
  if (x === 0) return 0;

  let left = 0;
  let right = x;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left - 1;
}
console.log(mySqrt(8)); // 2
