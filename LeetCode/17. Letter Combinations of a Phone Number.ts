const lettersMap = {
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"],
} as const;

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return [];
  const result: string[] = [];
  function backTrack(i: number, path: string[]) {
    if (path.length >= digits.length || i >= digits.length) {
      result.push(path.join(""));
      return;
    }
    const letters: string[] = lettersMap[digits[i]];

    for (let j = 0; j < letters.length; j++) {
      path.push(letters[j]);
      backTrack(path.length, path);
      path.pop();
    }
  }
  backTrack(0, []);
  return result;
}

console.log(letterCombinations("23"));
