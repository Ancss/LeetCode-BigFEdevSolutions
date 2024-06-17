function hIndex(citations: number[]): number {
  citations.sort((a, b) => a - b);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    h = Math.max(h, Math.min(citations[i], citations.length - i));
  }
  return h;
}
// function hIndex(citations: number[]): number {
//   citations.sort((a, b) => a - b);
//   let hIndex = citations.length;
//   for (const citation of citations) {
//     console.log(citation, hIndex);
//     if (citation < hIndex) {
//       hIndex -= 1;
//     }
//   }

//   return hIndex;
// }
console.log(hIndex([3, 0, 6, 1, 5]));
