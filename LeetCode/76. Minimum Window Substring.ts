// function minWindow(s: string, t: string): string {
//   if (s === t) return s;
//   if (t.length > s.length) return "";
//   let minStr = "";
//   const map = new Map<string, number>();
//   for (const char of t) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   for (let i = 0; i < s.length; i++) {
//     let str = "";
//     const map2 = new Map(map);
//     for (let j = i; j < s.length; j++) {
//       str += s[j];
//       if (map2.get(s[j])! > 1) {
//         map2.set(s[j], map2.get(s[j])! - 1);
//       } else if (map2.get(s[j]) === 1) {
//         map2.delete(s[j]);
//       }
//       if (map2.size === 0) {
//         if (minStr === "" || str.length < minStr.length) {
//           minStr = str;
//         }
//         break;
//       }
//     }
//   }
//   return minStr;
// }
function minWindow(s: string, t: string): string {
  if (t.length > s.length) {
    return "";
  }

  let minSubstring = "";
  let minLength = s.length;

  const tFreqMap = new Map<string, number>();
  for (let i = 0; i < t.length; i++) {
    tFreqMap.set(t[i], (tFreqMap.get(t[i]) || 0) + 1);
  }

  const need = tFreqMap.size;
  const windowFreqMap = new Map<string, number>();
  let have = 0;

  let i = 0,
    j = 0;
  while (j <= s.length) {
    if (have >= need) {
      if (tFreqMap.has(s[i])) {
        console.log(windowFreqMap, tFreqMap, s[i], have);
        have -= windowFreqMap.get(s[i]) === tFreqMap.get(s[i]) ? 1 : 0;
        const val =
          windowFreqMap.get(s[i])! > 1 ? windowFreqMap.get(s[i])! - 1 : 0;
        windowFreqMap.set(s[i], val);
      }

      minSubstring = minLength >= j - i ? s.substring(i, j) : minSubstring;
      minLength = minSubstring.length;
      i++;
    } else {
      if (tFreqMap.has(s[j])) {
        windowFreqMap.set(s[j], (windowFreqMap.get(s[j]) || 0) + 1);
        have += windowFreqMap.get(s[j]) === tFreqMap.get(s[j]) ? 1 : 0;
        // console.log(windowFreqMap);
      }
      j++;
    }
  }

  return minSubstring;
}
console.log(minWindow("ADOBECODEBANC", "ABC")); // "BANC"
