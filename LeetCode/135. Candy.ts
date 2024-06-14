function candy(ratings: number[]): number {
  const allocateCandies = new Array(ratings.length).fill(1);
  for (let i = 0; i < ratings.length; i++) {
    // if the current rating is greater than the previous rating, then the current child should get more candies than the previous child
    if (ratings[i] > ratings[i - 1]) {
      allocateCandies[i] = allocateCandies[i - 1] + 1;
    }
  }
  let sum = allocateCandies[allocateCandies.length - 1];
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      allocateCandies[i] = Math.max(
        allocateCandies[i],
        allocateCandies[i + 1] + 1
      );
    }
    sum += allocateCandies[i];
  }
  return sum;
}
// console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 87, 87, 87, 2, 1]));
// [1, 2, 87, 87, 87, 2, 1][(1, 2, 3, 1, 2, 1, 1)][(1, 2, 3, 1, 3, 2, 1)];
