function permute(nums: number[]): number[][] {
  if (nums.length === 1) {
    return [[nums[0]]];
  }

  if (nums.length === 2) {
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]],
    ];
  }

  if (nums.length >= 3) {
    let permutations: number[][] = [];

    for (let i = 0; i < nums.length; i++) {
      const numsCopy = [...nums];
      numsCopy.splice(i, 1);
      const permutationsWithoutIndex = permute(numsCopy);

      for (let j = 0; j < permutationsWithoutIndex.length; j++) {
        const items = permutationsWithoutIndex[j];

        permutations.push([nums[i], ...items]);
      }
    }

    return permutations;
  }

  return [[]];
}
console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
