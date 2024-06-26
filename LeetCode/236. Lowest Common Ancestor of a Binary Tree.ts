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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root === p || root === q) return root;
  const leftHasPQ = lowestCommonAncestor(root.left, p, q);
  const rightHasPQ = lowestCommonAncestor(root.right, p, q);
  console.log(leftHasPQ, rightHasPQ, root.val);
  if (leftHasPQ && rightHasPQ) return root;
  return leftHasPQ || rightHasPQ;
}
const root = new TreeNode(3);
root.left = new TreeNode(5);
root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

const p = root.left;
const q = root.left.right.right;
lowestCommonAncestor(root, p, q); // Expected: 3

export {};
