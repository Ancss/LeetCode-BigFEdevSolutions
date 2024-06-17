function fullJustify(words: string[], maxWidth: number): string[] {
  const justifyArr = [words[0]];
  for (let i = 1; i < words.length; i++) {
    const currentLen = justifyArr[justifyArr.length - 1].length;
    const newLen = currentLen + 1 + words[i].length;
    console.log(newLen, justifyArr[justifyArr.length - 1]);
    if (newLen <= maxWidth) {
      justifyArr[justifyArr.length - 1] += " " + words[i];
    } else {
      formatLine(justifyArr, maxWidth, currentLen);
      justifyArr.push(words[i]);
    }
  }
  justifyArr[justifyArr.length - 1] = justifyArr[justifyArr.length - 1].padEnd(
    maxWidth,
    " "
  );
  return justifyArr;
}
function formatLine(
  justifyArr: string[],
  maxWidth: number,
  currentLen: number
) {
  if (justifyArr[justifyArr.length - 1].length < maxWidth) {
    const currentWords = justifyArr[justifyArr.length - 1].split(" ");
    if (currentWords.length === 1) {
      justifyArr[justifyArr.length - 1] = currentWords[0].padEnd(maxWidth, " ");
    } else {
      const padSpace = Math.floor(
        (maxWidth - currentLen + currentWords.length - 1) /
          (currentWords.length - 1)
      );

      let extraSpace = (maxWidth - currentLen) % (currentWords.length - 1);
      for (let i = 0; i < extraSpace; i++) {
        currentWords[i] += " ";
      }
      justifyArr[justifyArr.length - 1] = currentWords.join(
        " ".repeat(padSpace > 0 ? padSpace : 1)
      );
    }
  }
}

const words = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do",
];
const maxWidth = 20;
console.log(fullJustify(words, maxWidth));
