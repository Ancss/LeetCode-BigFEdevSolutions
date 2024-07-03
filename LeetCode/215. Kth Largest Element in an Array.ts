function findKthLargest(nums: number[], k: number): number {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (k === 0) return 0;
  const heap = new minHeap();
  for (let num of nums) {
    if (heap.size < k) {
      heap.add(num);
    } else if (num > heap.peek()) {
      heap.poll();
      heap.add(num);
    }
  }
  return heap.peek();
}
class minHeap {
  private heap: number[];
  constructor() {
    this.heap = [];
  }
  getLeftChildIndex(index: number): number {
    return index * 2 + 1;
  }
  hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  getLeftValue(index: number): number {
    return this.heap[this.getLeftChildIndex(index)];
  }
  getRightChildIndex(index: number): number {
    return index * 2 + 2;
  }
  getRightValue(index: number): number {
    return this.heap[this.getRightChildIndex(index)];
  }
  hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  getParentValue(index: number): number {
    return this.heap[this.getParentIndex(index)];
  }
  hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }
  peek(): number {
    return this.heap[0];
  }
  get size() {
    return this.heap.length;
  }
  poll() {
    if (this.size === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();
    const item = this.heap[0];
    this.heap[0] = this.heap.pop()!;
    console.log("poll", this.heap);
    this.heapifyDown();

    return item;
  }
  add(value: number) {
    console.log("before add", value, this.heap);
    this.heap.push(value);
    this.heapifyUp();
    console.log("after add", this.heap);
  }
  heapifyUp(): void {
    let index = this.heap.length - 1;
    console.log("heapifyUp", this.getParentValue(index), this.heap[index]);
    while (
      this.hasParent(index) &&
      this.getParentValue(index) > this.heap[index]
    ) {
      const temp = this.heap[this.getParentIndex(index)];
      this.heap[this.getParentIndex(index)] = this.heap[index];
      this.heap[index] = temp;
      index = this.getParentIndex(index);
    }
  }
  heapifyDown(): void {
    let index = 0;
    while (index < this.heap.length && this.hasLeftChild(index)) {
      let smallerIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.getRightValue(index) < this.heap[smallerIndex]
      ) {
        smallerIndex = this.getRightChildIndex(index);
      }

      if (this.heap[index] < this.heap[smallerIndex]) break;
      const temp = this.heap[index];
      this.heap[index] = this.heap[smallerIndex];
      this.heap[smallerIndex] = temp;
      index = smallerIndex;
    }
  }
}
console.log(findKthLargest([3, 1, 2, 4], 2)); // 5
