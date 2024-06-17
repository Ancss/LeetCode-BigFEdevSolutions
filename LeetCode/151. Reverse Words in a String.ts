function reverseWords(s: string): string {
  const sArr = s.trim().split(" ").filter(Boolean);
  return sArr.reverse().join(" ");
}
