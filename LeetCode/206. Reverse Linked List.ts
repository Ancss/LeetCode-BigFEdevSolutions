// function reverseList(head: ListNode | null): ListNode | null {
//   const map = new Map<ListNode | null, ListNode>();
//   let current = head;
//   while (current) {
//     map.set(current.next, current);
//     current = current.next;
//   }
//   let node: ListNode | null = map.get(null)!;
//   while (map.has(node!)) {
//     node.next = map.get(node)!;
//     node = node.next;
//   }
//   node.next = head;
//   return map.get(null)!;
// }

function reverseList(
  head: ListNode | null,
  parent: ListNode | null
): ListNode | null {
  if (head === null) {
    return parent;
  }
  const headNext = head.next;
  head.next = parent;
  return reverseList(headNext, head);
}
