function combinationSum(candidates: number[], target: number): number[][] {
  if (!candidates.length) return [];
  const result: number[][] = [];
  function backTrack(index: number, sum: number, path: number[]) {
    console.log({ index, sum, path });
    if (sum === target) {
      result.push([...path]);
      return;
    }
    if (sum > target || index === candidates.length) return;

    sum = sum + candidates[index];
    path.push(candidates[index]);
    backTrack(index, sum, path);

    path.pop();
    sum = sum - candidates[index];
    backTrack(index + 1, sum, path);
  }
  backTrack(0, 0, []);
  return result;
}
console.log(combinationSum([2, 3, 6, 7], 7)); // [[2,2,3],[7]]
