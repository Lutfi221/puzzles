import { ListNode } from '../@typings/index.js';

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return null;
  const after = head.next;
  if (after) {
    head.next = swapPairs(after.next);
    after.next = head;
  }
  return after || head;
}
