function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const result: number[][] = [];
  let i = 1;
  let firstX = intervals[0][0];
  let firstY = intervals[0][1];
  while (i < intervals.length) {
    if (firstY >= intervals[i][0]) {
      firstY = Math.max(firstY, intervals[i][1]);
      firstX = Math.min(firstX, intervals[i][0]);
    } else {
      result.push([firstX, firstY]);
      firstX = intervals[i][0];
      firstY = intervals[i][1];
    }
    i++;
  }
  result.push([firstX, firstY]);
  return result;
}

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
