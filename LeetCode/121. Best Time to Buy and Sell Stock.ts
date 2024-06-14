function maxProfit(prices: number[]): number {
  // make sure prices has at least 2 elements
  if (prices.length < 2) return 0;
  let maxProfit = 0;
  let minPrice = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (maxProfit < prices[i] - minPrice) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
}

console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
export {};
