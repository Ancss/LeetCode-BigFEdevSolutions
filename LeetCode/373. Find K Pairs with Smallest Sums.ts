import { PriorityQueue } from "./priorityQueue";

function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const result: number[][] = [];
  if (nums1.length === 0 || nums2.length === 0 || k === 0) return result;

  const pq = new PriorityQueue<[number, number]>();

  for (let i = 0; i < nums1.length && i < k; i++) {
    pq.enqueue([i, 0], nums1[i] + nums2[0]);
  }
  while (k-- && !pq.isEmpty()) {
    const [i, j] = pq.dequeue()!;
    result.push([nums1[i], nums2[j]]);
    if (j + 1 < nums2.length) {
      pq.enqueue([i, j + 1], nums1[i] + nums2[j + 1]);
    }
  }

  return result;
}

const nums1 = [1, 7, 11];
const nums2 = [2, 4, 6];
const k = 3;
console.log(kSmallestPairs(nums1, nums2, k));
