function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (n === 0) return head;
  if (head === null || head.next == null) return null;
  const map = new Map<number, ListNode>();
  let current: ListNode | null = head;
  let i = 1;
  while (current) {
    map.set(i, current);
    current = current.next;
    i++;
  }
  const leftNode: ListNode = map.get(i - n - 1)!;

  const rightNode = map.get(i - n + 1) || null;
  if (leftNode == null) {
    head = rightNode;
  } else {
    leftNode.next = rightNode;
  }
  return head;
}
