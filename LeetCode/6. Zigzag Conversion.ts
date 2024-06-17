function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const multiDimensional: string[][] = Array.from(
    { length: numRows },
    () => []
  );
  let step = 1;
  let currentDimension = 0;
  for (let i = 0; i < s.length; i++) {
    if (currentDimension === 0) {
      step = 1;
    }
    if (currentDimension === numRows - 1) {
      step = -1;
    }
    console.log(currentDimension, i);
    multiDimensional[currentDimension].push(s[i]);
    currentDimension += step;
  }
  return multiDimensional.flat().join("");
}
console.log(convert("AB", 1));
