function intToRoman(num: number): string {
  const thousands = ~~(num / 1000) || 0;
  const hundreds = ~~((num % 1000) / 100) || 0;
  const tens = ~~((num % 100) / 10) || 0;
  const ones = ~~(num % 10) || 0;
  const thousandsRomans = thousands ? "M".repeat(thousands) : "";
  const hundredsRomans =
    hundreds === 9
      ? "CM"
      : hundreds === 4
      ? "CD"
      : hundreds >= 5
      ? "D" + "C".repeat(hundreds - 5)
      : "C".repeat(hundreds);
  console.log("tens", tens, "ones", ones);
  const tensRomans =
    tens === 9
      ? "XC"
      : tens === 4
      ? "XL"
      : tens >= 5
      ? "L" + "X".repeat(tens - 5)
      : "X".repeat(tens);
  const onesRomans =
    ones === 9
      ? "IX"
      : ones === 4
      ? "IV"
      : ones >= 5
      ? "V" + "I".repeat(ones - 5)
      : "I".repeat(ones);
  return thousandsRomans + hundredsRomans + tensRomans + onesRomans;
}

console.log(intToRoman(3749));
