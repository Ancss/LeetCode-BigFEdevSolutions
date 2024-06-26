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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root || (!root.left && !root.right)) return false;
  function dfs(node: TreeNode | null, sum: number): boolean {
    if (!node) return false;
    if (targetSum === sum + node.val && !node.left && !node.right) return true;
    return dfs(node.left, sum + node.val) || dfs(node.right, sum + node.val);
  }
  return dfs(root, 0);
}
