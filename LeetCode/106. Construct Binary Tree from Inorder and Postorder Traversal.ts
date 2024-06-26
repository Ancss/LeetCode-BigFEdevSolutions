function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (inorder.length === 0 || postorder.length === 0) return null;
  const rootValue = postorder.pop()!;
  const rootIndex = inorder.indexOf(rootValue);

  const node = new TreeNode(rootValue);
  node.right = buildTree(inorder.slice(rootIndex + 1), postorder);
  node.left = buildTree(inorder.slice(0, rootIndex), postorder);
  return node;
}
