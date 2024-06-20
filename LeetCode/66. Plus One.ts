function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + 1;
    digits[i] = sum % 10;
    if (sum < 10) {
      return digits;
    }
  }
  return [1, ...digits];
}
console.log(plusOne([1, 2, 3])); // [1, 2, 4]
