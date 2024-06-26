function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const temp = invertTree(root.left);
  root.left = invertTree(root.right);
  root.right = temp;
  return root;
}
