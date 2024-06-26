/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) return [];
  const queue = [root];
  const nums: number[][] = [];
  while (queue.length) {
    const size = queue.length;
    const level: number[] = [];
    for (let i = 0; i < size; i++) {
      const q = queue.shift()!;
      level.push(q.val);
      if (q.left) {
        queue.push(q.left);
      }
      if (q.right) {
        queue.push(q.right);
      }
    }
    if (level.length) {
      nums.push(nums.length % 2 === 0 ? level : level.reverse());
    }
  }
  return nums;
}
