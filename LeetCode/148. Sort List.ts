/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
export {};
function sortList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next!;
    fast = fast.next.next;
  }
  const right = sortList(slow.next);
  slow.next = null;
  const left = sortList(head);
  return merge(left, right);
}
function merge(left: ListNode | null, right: ListNode | null): ListNode | null {
  const pseudoHead = new ListNode();
  let prevNode = pseudoHead;
  while (prevNode) {
    if (!left) {
      prevNode.next = right;
      break;
    }
    if (!right) {
      prevNode.next = left;
      break;
    }
    if (left.val < right.val) {
      prevNode.next = left;
      left = left.next;
    } else {
      prevNode.next = right;
      right = right.next;
    }
    prevNode = prevNode.next;
  }
  return pseudoHead.next;
}
