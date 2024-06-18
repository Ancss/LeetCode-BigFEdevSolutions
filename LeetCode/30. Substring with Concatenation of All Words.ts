function findSubstring(s: string, words: string[]): number[] {
  const result: number[] = [];
  const wordLength: number = words[0].length;
  const totalLength: number = words.length * wordLength;
  const map = words.reduce((acc, word) => {
    acc.set(word, (acc.get(word) || 0) + 1);
    return acc;
  }, new Map());
  for (let i = 0; i <= s.length - totalLength; i++) {
    const map2 = new Map(map);
    let str = "";
    for (let j = i; j <= i + totalLength; j++) {
      if (str && str.length % wordLength === 0) {
        if (map2.get(str) === 1) {
          map2.delete(str);
          str = "";
        } else if (map2.get(str) > 1) {
          map2.set(str, map2.get(str) - 1);
          str = "";
        } else if (map2.get(str) === undefined) {
          break;
        }
      }
      str += s[j];
    }
    if (map2.size === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(
  findSubstring("lingmindraboofooowingdingbarrwingmonkeypoundcake", [
    "fooo",
    "barr",
    "wing",
    "ding",
    "wing",
  ])
);
