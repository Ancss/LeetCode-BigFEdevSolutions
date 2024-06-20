function deleteDuplicates(head: ListNode | null): ListNode | null {
  const map = new Map<number, ListNode | null>();
  let current = head;
  while (current) {
    if (map.has(current.val)) {
      map.set(current.val, null);
    } else {
      map.set(current.val, current);
    }
    current = current.next;
  }
  current = head;
  let pseudoHead = new ListNode();
  let next = pseudoHead;
  while (current) {
    if (map.get(current.val) === null) {
      current = current.next;
    } else {
      next.next = map.get(current.val)!;
      next = next.next;
      current = current.next;
    }
  }
  return pseudoHead.next;
}
