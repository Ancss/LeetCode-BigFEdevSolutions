// function isIsomorphic(s: string, t: string): boolean {
//   if (s.length !== t.length) return false;
//   if (s === t) return true;
//   for (let i = 0; i < s.length; i++) {
//     const indexS = s.indexOf(s[i], i + 1);
//     console.log(indexS);
//     if (indexS === -1) {
//       const bol = t.indexOf(t[i], i + 1) === -1;
//       if (!bol) {
//         return false;
//       } else {
//         continue;
//       }
//     }
//     const tChar = t[indexS];
//     if (tChar !== t[i]) return false;
//   }
//   return true;
// }

function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  if (s === t) return true;
  const sMap = new Map<string, string>();
  const tSet = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      if (sMap.get(s[i]) !== t[i]) return false;
    } else {
      if (tSet.has(t[i])) return false;
      sMap.set(s[i], t[i]);
      tSet.add(t[i]);
    }
  }
  return true;
}
console.log(isIsomorphic("egg", "add")); // true
