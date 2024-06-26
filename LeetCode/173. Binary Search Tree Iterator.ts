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

class BSTIterator {
  private stack: TreeNode[] = [];
  private index = 0;
  constructor(root: TreeNode | null) {
    this.initStack(root);
  }
  initStack(node: TreeNode | null) {
    const dfs = (node: TreeNode | null) => {
      if (node === null) return;
      dfs(node.left);
      this.stack.push(node);
      dfs(node.right);
    };
    dfs(node);
  }
  next(): number {
    return this.stack[this.index++].val;
  }

  hasNext(): boolean {
    return this.index < this.stack.length;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
