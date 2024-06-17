class RandomizedSet {
  private nums: number[] = [];
  constructor() {}

  insert(val: number): boolean {
    const i = this.nums.findIndex((num) => num === val);
    if (i < 0) {
      this.nums.push(val);
      return true;
    }
    return false;
  }

  remove(val: number): boolean {
    const i = this.nums.findIndex((num) => num === val);
    if (i >= 0) {
      this.nums.splice(i, 1);
      return true;
    }
    return false;
  }

  getRandom(): number {
    return this.nums[Math.floor(Math.random() * this.nums.length)];
  }
}

//  Your RandomizedSet object will be instantiated and called as such:
const randomizedSet = new RandomizedSet();
randomizedSet.insert(1); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomizedSet.remove(2); // Returns false as 2 does not exist in the set.
randomizedSet.insert(2); // Inserts 2 to the set, returns true. Set now contains [1,2].
randomizedSet.getRandom(); // getRandom() should return either 1 or 2 randomly.
randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
randomizedSet.insert(2); // 2 was already in the set, so return false.
console.log(randomizedSet.getRandom()); // Since 2 is the only number in the set, getRandom() will always return 2.
console.log(randomizedSet);
export {};
