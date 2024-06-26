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

import { node } from "../Javascript/91. invert a binary tree";

/**
 Do not return anything, modify root in-place instead.
 */
// function flatten(root: TreeNode | null): void {
//   if (!root) return;
//   let pseudoHead = new TreeNode();
//   const head = pseudoHead;
//   function dfs(node: TreeNode | null) {
//     if (!node) return;
//     if (node.left) {
//       pseudoHead.right = new TreeNode(node.left.val);
//       pseudoHead = pseudoHead.right;
//       dfs(node.left);
//     }
//     if (node.right) {
//       pseudoHead.right = new TreeNode(node.right.val);
//       pseudoHead = pseudoHead.right;
//       dfs(node.right);
//     }
//     node.left = null;
//   }
//   dfs(root);
//   root.right = head.right;
// }

function flatten(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  if (!root.left && !root.right) return root;
  const leftTail = flatten(root.left);
  const rightTail = flatten(root.right);
  if (leftTail !== null) {
    leftTail.right = root.right;
    root.right = root.left;
    root.left = null;
  }
  return rightTail !== null ? rightTail : leftTail;
}
