import { ListNode } from '../@typings/index';

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const origHead = head;
  let prevVal: number;
  let prevNode: ListNode | null = null;
  while (head) {
    if (head.val == prevVal!) {
      prevNode!.next = head.next;
    } else {
      prevNode = head;
      prevVal = head.val;
    }
    head = head.next;
  }
  return origHead;
}
