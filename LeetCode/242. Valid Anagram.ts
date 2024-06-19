function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  if (s === t) return true;
  s = s.toLowerCase();
  const tMap = t
    .toLowerCase()
    .split("")
    .reduce((acc, c) => {
      acc.set(c, acc.has(c) ? acc.get(c)! + 1 : 1);
      return acc;
    }, new Map<string, number>());
  for (let i = 0; i < s.length; i++) {
    console.log(tMap, s[i]);
    if (tMap.has(s[i]) && tMap.get(s[i]) !== 0) {
      tMap.set(s[i], tMap.get(s[i])! - 1);
    } else {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("aacc", "ccac"));
