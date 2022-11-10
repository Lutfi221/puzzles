import { ListNode } from '../@typings/index';

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (!l1) return null;
  const origin = new ListNode();
  let a: ListNode | null = l1;
  let b: ListNode | null = l2;

  let carry = 0;
  let output = origin;

  while (a || b || carry !== 0) {
    let sum = carry;
    if (a) {
      sum += a.val;
      a = a.next;
    }
    if (b) {
      sum += b.val;
      b = b.next;
    }

    if (sum >= 10) {
      output.next = new ListNode(sum - 10);
      carry = 1;
    } else {
      output.next = new ListNode(sum);
      carry = 0;
    }
    output = output.next;
  }
  return origin.next;
}
