function coinChange(coins: number[], amount: number): number {
  let dp: number[] = new Array(amount + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;

  for (let i = 1; i <= amount; i++) {
    for (let coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  console.log(dp);
  return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}

const coins = [1, 5, 10];
const amount = 27;
console.log(coinChange(coins, amount));
