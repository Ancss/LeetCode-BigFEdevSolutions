// Please implement a function to compare 2 semver strings.

// compare('12.1.0', '12.0.9')
// // 1, meaning first one is greater

// compare('12.1.0', '12.1.2')
// // -1, meaning latter one is greater

// compare('5.0.1', '5.0.1')
// 0, meaning they are equal.

function compare(v1: string, v2: string): 0 | 1 | -1 {
  const [major1, minor1, patch1] = v1.split('.')
  const [major2, minor2, patch2] = v2.split('.')
  const result = +major1 - +major2
  const result2 = +minor1 - +minor2
  const result3 = +patch1 - +patch2
  console.log(result2,minor1,minor2)
  return result === 0
    ? result2 === 0 ? result3 === 0 ? 0 : result3 > 0 ? 1 : -1
      : result2 > 0 ? 1 : -1
    : result > 0 ? 1 : -1
}
console.log(compare('12.1.0', '12.0.9'))