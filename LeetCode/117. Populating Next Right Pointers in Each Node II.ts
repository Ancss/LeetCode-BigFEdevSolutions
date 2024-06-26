//  Definition for _Node.
class _Node {
  val: number;
  left: _Node | null;
  right: _Node | null;
  next: _Node | null;

  constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

function connect(root: _Node | null): _Node | null {
  let queue = [root];
  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift()!;
      if (node === null) return root;
      if (i < size - 1) node.next = queue[0];
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return root;
}

export {};
