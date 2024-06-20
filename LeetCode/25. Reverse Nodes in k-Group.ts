function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (k <= 1) return head;
  let j = 1;
  let current = head;
  // if head length is less than k,not need to swap them
  while (current && j < k) {
    current = current.next;
    j++;
  }
  if (!current) {
    return head;
  }
  const pseudoHead = new ListNode(0, head);
  let prevLeft = pseudoHead;
  let nextRight: ListNode | null = null;

  current = head;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;
  let i = 1;
  let right = k;

  const leftStart = current;
  while (i <= right) {
    next = current!.next;
    if (i === right) {
      nextRight = next;
    }
    current!.next = prev;
    prev = current;
    current = next;
    i++;
  }
  console.log(prevLeft, prev);
  prevLeft.next = prev;
  if (leftStart) {
    leftStart.next = reverseKGroup(nextRight, k);
  }
  return pseudoHead.next;
}
