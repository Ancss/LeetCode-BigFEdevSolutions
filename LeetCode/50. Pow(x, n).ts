function myPow(x: number, n: number): number {
  const isNegativePower = n < 0;
  n = Math.abs(n);
  let result = 1;
  while (n > 0) {
    if (n % 2 === 1) result *= x;
    x *= x;
    n = Math.floor(n / 2);
  }
  return isNegativePower ? 1 / result : result;
}
