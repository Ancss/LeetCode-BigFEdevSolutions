function wordBreak(s: string, wordDict: string[], cache = {}): boolean {
  if (cache[s] !== undefined) return cache[s];
  if (wordDict.length === 0) return false;
  if (s.length === 0) return true;
  let flag = false;
  for (let i = 0; i < wordDict.length; i++) {
    const word = wordDict[i];
    if (s.startsWith(word)) {
      flag = wordBreak(s.substring(word.length), wordDict, cache);
      if (flag) {
        cache[s] = true;
        return flag;
      }
    }
  }
  cache[s] = flag;
  return flag;
}
const cache = {};
console.log(
  wordBreak(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    [
      "a",
      "aa",
      "aaa",
      "aaaa",
      "aaaaa",
      "aaaaaa",
      "aaaaaaa",
      "aaaaaaaa",
      "aaaaaaaaa",
      "aaaaaaaaaa",
    ],
    cache
  )
);
console.log(cache);
