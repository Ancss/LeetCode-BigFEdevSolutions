// Give a number string, check if it is valid number.

// By "valid", we mean if it validates as one of below formats:

// integer, such as '0', '-1'
// decimal number like '1.0', '-2.335'
// exponential notation -12.3e45
// Formats such as BigInt, Infinity, NaN, octal and hexadecimal .etc are out of scope, you can treat them as invalid.

// Pay attention to the sign + -.

// Note
// The test cases are not covering all the possible cases, since this is not a problem to test your knowledge against JavaScript language spec.

// You should confirm with your interviewer about the scope and those edge cases.

// isNaN() seems to be a nice trick, but could you solve without it?

function validateNumberString(str: string): boolean {
  if (str === '') {
    return false
  }
  const num = isNaN(str) ? NaN : Number(str)
  if (num === 0) return true
  console.log(num)
  return !!num
}
function isNaN(value:string) {
  const number = Number(value);
  // NaN !== NaN
  return number !== number;
}
console.log(validateNumberString('0'))
console.log(
  validateNumberString('Infinity')
)
console.log(
  validateNumberString('afdsa3132')
)