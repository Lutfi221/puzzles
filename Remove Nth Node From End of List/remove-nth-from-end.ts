import { createLinkedList, ListNode } from '../@typings/index.js';

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) return null;

  let lead = head;
  let tail = head;
  let i = 0;

  while (lead.next !== null) {
    if (i >= n) tail = tail.next!;
    lead = lead.next;
    i++;
  }

  if (i === 0) return null;
  if (tail === head && i + 1 === n) {
    head = head.next;
  }

  tail.next = tail.next!.next;
  return head;
}

console.log(removeNthFromEnd(createLinkedList([1, 2, 3, 4, 5]), 2)?.toList());
console.log(removeNthFromEnd(createLinkedList([1, 2]), 2)?.toList());
console.log(removeNthFromEnd(createLinkedList([1, 2]), 1)?.toList());
