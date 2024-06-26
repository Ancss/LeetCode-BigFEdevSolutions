//  Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maxDepth(root: TreeNode | null): number {
  let max = 0;
  function dfs(node: TreeNode | null, depth = 1) {
    if (!node) return;
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
    max = Math.max(max, depth);
  }
  return max;
}

export {};
