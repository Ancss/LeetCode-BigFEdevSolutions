// function climbStairs(n: number): number {
//   if (n <= 1) {
//     return 1;
//   } else if (n === 2) {
//     return 2;
//   }
//   return climbStairs(n - 1) + climbStairs(n - 2);
// }

function climbStairs(n: number): number {
  const tab = new Array(n + 1).fill(0);
  if (n >= 1) {
    tab[0] = 1;
    tab[1] = 1;
  }
  for (let i = 2; i < n + 1; i++) {
    tab[i] = tab[i - 1] + tab[i - 2];
  }
  return tab[n];
}
console.log(climbStairs(2)); // 2
