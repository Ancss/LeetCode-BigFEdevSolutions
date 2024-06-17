function longestCommonPrefix(strs: string[]): string {
  // make sure strs has at least one element
  if (strs.length === 0) return "";
  let commonPrefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) return commonPrefix;
    }
    commonPrefix += char;
  }
  return commonPrefix;
}
