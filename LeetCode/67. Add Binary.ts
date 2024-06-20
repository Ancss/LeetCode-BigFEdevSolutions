function addBinary(a: string, b: string): string {
  const sum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return sum.toString(2);
}
console.log(addBinary("11", "1"));
