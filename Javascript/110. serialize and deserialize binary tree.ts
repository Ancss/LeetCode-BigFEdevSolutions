// Can you transform(serialize) a binary tree into a string and restore(deserialize) a binary tree from the string? Just like what JSON.stringify() and JSON.parse() do.

// For example, for a tree from 91. invert a binary tree


// BFE.dev would serialize it to [1,2,3,4,null,null,5,6,7,8,null,null,null,null,9]

// But there are more ways of doing it rather than above, any would be fine as long as your deserialize() and serialize() work as a pair.

// Your code is tested like this:


// const tree1 = ...
// expect(typeof serialize(tree1)).toBe('string')

// const tree2 = deserialize(serialize(tree1)) 
// expect(isIdentical(tree1, tree2)).toBe(true)
// Binary tree in this problem consists of value of integers.
// This is the class for the node
// you can use this directly as it is bundled with your code
import { node } from './91. invert a binary tree'
class Node {
  value: number
  left: null | Node
  right: null | Node
  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 1,2,4,_,_,5,_,_,3,6,_,_,7,_,_
function serialize(root: Node | null): string {
  if (!root) { return '_' }
  return `${root.value},${serialize(root.left)},${serialize(root.right)}`
}
function deserialize(str: string): Node | null {
  const queue = str.split(',')

  return dfs()
  function dfs() {
    const value = queue.shift()
    if (value === '_') return null
    const node = new Node(Number(value))
    node.value = Number(value)
    node.left = dfs()
    node.right = dfs()
    return node
  }

}
console.log(serialize(node))
console.log(deserialize(serialize(node)))