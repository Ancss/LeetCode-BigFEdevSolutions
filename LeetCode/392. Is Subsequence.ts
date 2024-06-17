// function isSubsequence(s: string, t: string): boolean {
//   if (!s ) return true;
//   if(!t) return false;
//   const sArr = s.split("");
//   let j = 0;
//   for (let i = 0; i < sArr.length; i++) {
//     const index = t.indexOf(sArr[i], j);
//     if (index < 0) {
//       return false;
//     }
//     j = index + 1;
//   }
//   return true;
// }

function isSubsequence(s: string, t: string): boolean {
  if (!s) return true;
  if (!t) return false;
  if (s === t) return true;
  let left = 0;
  for (let right = 0; right < t.length; right++) {
    if (s[left] === t[right]) {
      left++;
    }
  }
  return left === s.length;
}
