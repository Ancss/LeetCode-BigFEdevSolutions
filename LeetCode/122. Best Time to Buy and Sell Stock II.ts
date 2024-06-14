function maxProfit(prices: number[]): number {
  let buy = 0;
  let sell = 0;
  let profit = 0;
  while (++sell < prices.length) {
    profit = Math.max(0, prices[sell] - prices[buy++]) + profit;
  }
  return profit;
}
// console.log(maxProfit([2, 1, 2, 1, 0, 1, 2]));
console.log(maxProfit([1, 1, 3, 4, 5]));
// console.log(maxProfit([7, 6, 4, 3, 1]));
export {};
