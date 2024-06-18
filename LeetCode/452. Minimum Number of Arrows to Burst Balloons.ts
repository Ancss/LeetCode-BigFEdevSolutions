// function findMinArrowShots(points: number[][]): number {
//   points.sort((a, b) => a[0] - b[0]);
//   let firstPointX = points[0][0];
//   let firstPointY = points[0][1];
//   let n = 1;
//   for (let i = 1; i < points.length; i++) {
//     const [start, end] = points[i];
//     if (firstPointY >= start) {
//       firstPointX = Math.max(firstPointX, start);
//       firstPointY = Math.min(firstPointY, end);
//     } else {
//       n++;
//       firstPointX = start;
//       firstPointY = end;
//     }
//   }
//   return n;
// }

function findMinArrowShots(points: number[][]): number {
  points = points.sort((a, b) => (a[0] < b[0] ? -1 : 1));

  let count = 0;
  let i = 0;
  while (i < points.length) {
    let end = points[i++][1];
    while (i < points.length && end >= points[i][0]) {
      end = Math.min(end, points[i][1]);
      ++i;
    }
    ++count;
  }

  return count;
}

console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
); // 2
