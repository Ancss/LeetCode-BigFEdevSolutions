// Inverting a node means swapping its left child and right child.
// You need to apply this to all nodes.As following figure illustrates.


// This is the type for the node
type Node = null | {
  value: number
  left: Node
  right: Node
}


/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node: Node) {
  if (node == null) return node
  const copiedNodeRight = node.right
  node.right = invert(node.left)
  node.left = invert(copiedNodeRight)
  return node
}

// Test case
export let node: Node = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null
    },
    right: {
      value: 5,
      left: null,
      right: null
    }
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  }
}
// console.log(JSON.stringify(invert(node), null, 2))
export { }