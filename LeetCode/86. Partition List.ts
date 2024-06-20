function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;

  let pseudoLeft = new ListNode();
  let pseudoRight = new ListNode();
  let left = pseudoLeft;
  let right = pseudoRight;
  let current = head;

  while (current) {
    if (current.val < x) {
      left.next = current;
      left = left.next;
    } else {
      right.next = current;
      right = right.next;
    }
    current = current.next!;
    right.next = null;
  }
  console.log("pseudoLeft", pseudoLeft);
  console.log("pseudoRight", pseudoRight);
  left.next = pseudoRight.next;
  return pseudoLeft.next;
}

export {};
