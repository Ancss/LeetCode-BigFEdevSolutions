function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
  carry: number = 0
): ListNode | null {
  if (!l1 && !l2 && !carry) return null;

  var total: number = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
  carry = parseInt(total / 10 + "");
  return new ListNode(
    total % 10,
    addTwoNumbers(l1?.next ?? null, l2?.next ?? null, carry)
  );
}
