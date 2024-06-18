function summaryRanges(nums: number[]): string[] {
  let result: string[] = [];
  for (let i = 0; i < nums.length; ) {
    let j = i;
    while (j < nums.length) {
      if (nums[j + 1] - nums[j] === 1) {
        j++;
      } else {
        result.push(j === i ? `${nums[i]}` : `${nums[i]}->${nums[j]}`);
        i = j + 1;
        break;
      }
    }
  }
  return result;
}
console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
