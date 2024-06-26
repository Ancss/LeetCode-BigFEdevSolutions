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

function getMinimumDifference(root: TreeNode | null): number {
  if (root === null) return 0;
  let min = Number.MAX_SAFE_INTEGER;
  let lastValue = min;
  const dfs = (node: TreeNode | null) => {
    if (node === null) return 0;
    dfs(node.left);
    min = Math.min(min, Math.abs(node.val - lastValue));
    lastValue = node.val;
    dfs(node.right);
  };
  dfs(root);
  return min;
}
