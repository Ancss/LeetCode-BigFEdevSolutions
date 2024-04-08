// Roman numerals are represented by combinations of following seven symbols, each with a fixed integer value.

// Symbol	I	V	X	L	C	D	M
// Value	1	5	10	50	100	500	1000
// For Standard form, subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.

// Simply speaking, the roman numerals in standard form follow these rules.

// symbols are listed from highest to lowest, from left to right
// from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.
// Please implement integerToRoman(). The input are all integers within valid range.


integerToRoman(5)
// integerToRoman(123)
// // 'CXXIII'

// integerToRoman(1999)
// // 'MCMXCIX'

// integerToRoman(3420)
// 'MMMCDXX'

function integerToRoman(num: number): string {
  const roman = [
    ['I', 'V'],
    ['X', 'L'],
    ['C', 'D'],
    ['M']
  ]
  let res = ''
  let i = 0
  while (num > 0) {
    let digit = num % 10
    if (digit === 4) {
      // IV
      res = roman[i][1] + res
      res = roman[i][0] + res
    } else if (digit === 9) {
      // IX
      res = (roman[i + 1][0]) + res
      res = roman[i][0] + res
    } else {
      console.log(digit)
      while (digit > 0) {
        if (digit === 5 && roman[i][1]) {
          res = roman[i][1] + res
          digit = 0
        } else {

          res = roman[i][0] + res
          digit--
        }
      }

    }
    num = Math.floor(num / 10)
    i++
  }
  console.log(res)
  return res

}