function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;
  function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!root) return false;
    if (!left && !right) return true;
    if (!left || !right) return false;
    return (
      left.val === right.val &&
      dfs(left.left, right.right) &&
      dfs(left.right, right.left)
    );
  }
  return dfs(root.left, root.right);
}
