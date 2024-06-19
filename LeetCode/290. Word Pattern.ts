function wordPattern(pattern: string, s: string): boolean {
  if (pattern.length === 0 || s.length === 0) return false;
  if (pattern === s) return true;
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  const patternMap = new Map<string, string>();
  const wordSet = new Set<string>();
  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.has(pattern[i])) {
      if (patternMap.get(pattern[i]) !== words[i]) return false;
    } else {
      if (wordSet.has(words[i])) return false;
      patternMap.set(pattern[i], words[i]);
      wordSet.add(words[i]);
    }
  }
  return true;
}
