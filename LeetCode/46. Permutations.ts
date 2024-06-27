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
    let permutations = [];

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
