// Another basic algorithm even for Front End developers.

// You are asked to reverse a linked list.

// Suppose we have Node interface like this

// class Node {
//    new(val: number, next: Node);
//    val: number
//    next: Node
// }
// We can then chain nodes together to create a linked list.

// const Three = new Node(3, null)
// const Two = new Node(2, Three)
// const One = new Node(1, Two)

// //now we have  a linked list
// // 1 → 2 → 3
// Now how can you reverse it to 3 → 2 → 1 ? you can modify the next property of each node, but not the val.

// Follow up

// Could you solve it with and without recursion?

/** 
 * class Node {
 *  new(val: number, next: Node);
 *    val: number
 *    next: Node
 * }
 */

/**
 * @param {Node} list
 * @return {Node} 
 */
const reverseLinkedList = (list) => {
  let node = list
  let prev = null
  while (node !== null) {
    const temporary = node.next
    node.next = prev
    prev = node
    node = temporary
  }
  return prev

}


class Node {
  constructor(val, next) {
    this.val = val
    this.next = next
  }
  // new(val: number, next: Node);
  val: number
  next: Node
}
const Three = new Node(3, null)
const Two = new Node(2, Three)
const One = new Node(1, Two)
reverseLinkedList(One)
export { }