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

function maxPathSum(root: TreeNode | null): number {
  const { max, maxChildren } = findMax(root);
  return Math.max(max, maxChildren);
}

function findMax(root: TreeNode | null): { max: number; maxChildren: number } {
  if (!root) return { max: 0, maxChildren: 0 };
  if (!root.left && !root.right)
    return { max: root.val, maxChildren: root.val };

  let leftSum = root.val,
    rightSum = root.val;
  let leftChildTotal = -Infinity,
    rightChildTotal = -Infinity;

  if (root.left) {
    const leftItem = findMax(root.left);
    leftSum += leftItem.max;
    leftChildTotal = leftItem.maxChildren;
  }
  if (root.right) {
    const rightItem = findMax(root.right);
    rightSum += rightItem.max;
    rightChildTotal = rightItem.maxChildren;
  }

  const currentMax = Math.max(leftSum, rightSum, root.val);
  const currentMin = Math.min(leftSum, rightSum);
  const currentChildren = currentMax + currentMin - root.val;
  console.log(currentMax, leftChildTotal, rightChildTotal, currentChildren);

  return {
    max: currentMax,
    maxChildren: Math.max(
      currentMax,
      leftChildTotal,
      rightChildTotal,
      currentChildren
    ),
  };
}
