import { ListNode } from '../@typings/index';

function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
