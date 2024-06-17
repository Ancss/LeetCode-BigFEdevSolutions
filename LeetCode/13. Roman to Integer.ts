function romanToInt(s: string): number {
  const romans = {
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };
  const romansReg = new RegExp(Object.keys(romans).join("|"), "g");
  const res = s.match(romansReg);
  console.log(res);

  return (
    res?.reduce((acc, curr) => {
      return acc + romans[curr];
    }, 0) || 0
  );
}

console.log(romanToInt("III")); // 3
console.log(romanToInt("IXVIII")); // 3
