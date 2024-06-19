function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next == null) return null;

  let top = head;
  const map = new Map<number, ListNode>();
  let current: ListNode | null = head;
  let max = 0;
  while (current) {
    map.set(max, current);
    current = current.next;
    max++;
  }
  let i = max;
  console.log(max, map);
  k = k % map.size;
  while (k > 0) {
    const tail = map.get((max + i - 1) % max)!;
    if (tail) {
      tail.next = head;
      head = tail;
    }
    const secondTail = map.get((max + i - 2) % max)!;
    if (secondTail) {
      secondTail.next = null;
    }

    i--;
    i = i < 0 ? max : i;
    k--;
  }
  return head;
}
