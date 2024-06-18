function isValid(s: string): boolean {
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  const stack: string[] = [];
  let i = 0;
  while (i < s.length) {
    if (map[s[i]]) {
      stack.push(s[i]);
    } else {
      if (map[stack.pop()!] !== s[i]) {
        return false;
      }
    }
    i++;
  }
  if (stack.length) {
    return false;
  }
  return true;
}
console.log(isValid("()")); // true
console.log(isValid("(]")); // false
