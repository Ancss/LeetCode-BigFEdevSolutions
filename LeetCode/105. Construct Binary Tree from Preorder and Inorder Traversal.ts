function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) return null;
  if (inorder.length === 0) return null;
  const rootValue = preorder.shift()!;
  const rootIndex = inorder.indexOf(rootValue);
  const inorderLeft = inorder.slice(0, rootIndex);
  const inorderRight = inorder.slice(rootIndex + 1);

  const root = new TreeNode(rootValue);
  root.left = buildTree(preorder, inorderLeft);
  root.right = buildTree(preorder, inorderRight);
  return root;
}
