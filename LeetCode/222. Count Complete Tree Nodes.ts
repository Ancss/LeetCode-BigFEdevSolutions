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

function countNodes(root: TreeNode | null): number {
  let sum = 0;
  function dfs(root) {
    if (root === null) return 0;
    sum += 1;
    if (root.left || root.right) {
      dfs(root.left);
      dfs(root.right);
    }
  }
  dfs(root);
  return sum;
}
