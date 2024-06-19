function isHappy(n: number): boolean {
  const duplicate = new Set<number>();
  const getSum = (num: number): number => {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10;
      sum += digit * digit;
      num = Math.floor(num / 10);
    }
    return sum;
  };

  while (n !== 1 && !duplicate.has(n)) {
    duplicate.add(n);
    n = getSum(n);
  }
  return n === 1;
}
console.log(isHappy(19)); // true
