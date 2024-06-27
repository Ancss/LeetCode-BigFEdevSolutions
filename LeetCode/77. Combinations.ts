function combine(n: number, k: number): number[][] {
  const result: number[][] = [];
  function backTrack(start: number, path: number[]) {
    if (path.length === k) {
      result.push([...path]);
      return;
    }

    for (let i = start; i <= n; i++) {
      path.push(i);
      backTrack(i + 1, path);
      path.pop();
    }
  }
  backTrack(1, []);
  return result;
}

console.log(combine(4, 2));
