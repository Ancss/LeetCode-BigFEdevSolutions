// Given a string contaning only a, b and c, remove all b and ac.

// removeChars('ab') // 'a'
// removeChars('abc') // ''
// removeChars('cabbaabcca') // 'caa'
// What is the time and space complexity of your approach ?

// function removeChars(input: string): string {
//   let result = ''
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === 'a') {
//       result += 'a'
//     } else if (input[i] === 'b') {
//       continue
//     } else if (input[i] === 'c' && result[result.length - 1] === 'a') {
//       result = result.slice(0, -1)
//     } else {
//       result += input[i]
//     }
//   }
//   console.log(result)
//   return result
// }

// another way to solve this problem is use replace
function removeChars(input: string): string {
  let result = input.replace(/b/g, '').replace(/ac/g, '')
  console.log(result)
  return result.includes('ac') ? removeChars(result) : result
}
removeChars('ab') // 'a'
removeChars('abc') // ''
removeChars('cabbaabcca') // 'caa'