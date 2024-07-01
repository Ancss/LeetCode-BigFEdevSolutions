function exist(board: string[][], word: string): boolean {
  if (word.length === 0) return true;
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (!row) return false;
    for (let j = 0; j < row.length; j++) {
      if (row[j] === word[0]) {
        if (isExist(word, i, j)) return true;
      }
    }
  }
  function isExist(word: string, rowIndex = 0, colIndex = 0) {
    if (word.length === 0) return true;
    if (rowIndex >= board.length || rowIndex < 0 || colIndex < 0) return false;
    const row = board[rowIndex];
    if (!row || colIndex >= row.length) return false;
    console.log({ rowIndex, colIndex, word, row });
    if (row[colIndex] === word[0]) {
      const pre = row[colIndex];
      row[colIndex] = "";
      const res =
        isExist(word.substring(1), rowIndex + 1, colIndex) ||
        isExist(word.substring(1), rowIndex, colIndex + 1) ||
        isExist(word.substring(1), rowIndex - 1, colIndex) ||
        isExist(word.substring(1), rowIndex, colIndex - 1);
      row[colIndex] = pre;
      return res;
    }
  }

  return false;
}
console.log(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB"
  )
);
