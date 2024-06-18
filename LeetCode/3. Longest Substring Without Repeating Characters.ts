// function lengthOfLongestSubstring(s: string): number {
//   const scanner: string[] = [];
//   let longest = 0;

//   for (let char of s) {
//     const index = scanner.indexOf(char);
//     if (index > -1) {
//       scanner.splice(0, index + 1);
//     }
//     scanner.push(char);
//     longest = Math.max(longest, scanner.length);
//   }
//   return longest;
// }

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let right = 0;
  let maxLength = 0;
  while (right < s.length) {
    const subString = s.slice(left, right);
    const i = subString.indexOf(s[right]);
    if (i > -1) {
      left = left + i + 1;
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
}
console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("dvdf"));
console.log(lengthOfLongestSubstring("aab"));
console.log(lengthOfLongestSubstring("cdd"));
