//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// function reverseBetween(
//   head: ListNode | null,
//   left: number,
//   right: number
// ): ListNode | null {
//   if (!head || left === right) return head;
//   let count = 1;
//   let pseudoHead = new ListNode(0, head);

//   let joinFromLeft: ListNode | null = null;
//   let joinToRight: ListNode | null = null;

//   let prev: ListNode | null = pseudoHead;
//   let current: ListNode | null = head;
//   let next: ListNode | null = null;

//   while (current && count <= right) {
//     next = current.next;
//     if (count === left) {
//       joinFromLeft = prev;
//       joinToRight = current;
//     }
//     if (count >= left) {
//       current.next = prev;
//     }
//     prev = current;
//     current = next;
//     count++;
//   }

//   if (joinToRight) {
//     joinToRight.next = current;
//   }
//   if (joinFromLeft) {
//     joinFromLeft.next = prev;
//   }
//   return pseudoHead.next;
// }
function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let prevStart: ListNode | null = null;
  let start: ListNode | null = head;
  let i = 1;

  while (i < left) {
    prevStart = start;
    start = start.next!;
    i++;
  }

  let current: ListNode = start;
  let prev: ListNode | null = null;
  while (i <= right) {
    const temp = current.next!;
    current.next = prev;
    prev = current;
    current = temp;
    i++;
  }
  start.next = current;
  if (prevStart) {
    prevStart.next = prev;
  }
  return prevStart ? head : prev;
}
export {};
