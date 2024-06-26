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

function sumNumbers(root: TreeNode | null): number {
  if (root === null) return 0;
  let num = "";
  const nums: string[] = [];
  function dfs(node) {
    if (!node) return;
    num = num + node.val;
    dfs(node.left);
    dfs(node.right);
    if (!node.left && !node.right) {
      nums.push(num);
    }
    num = num.slice(0, -1);
  }
  dfs(root);
  console.log(nums);
  return nums.reduce((acc, cur) => acc + parseInt(cur || "0", 10), 0);
}
