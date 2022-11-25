import { ListNode } from '../@typings/index.js';

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head) return head;
  const origin = new ListNode(0, head);
  let p: ListNode | null = origin,
    q: ListNode | null = head,
    r = q?.next ? q.next : null,
    s = r?.next ? r.next : null;
  while (q && r) {
    if (p) p.next = r;
    if (r) r.next = q;
    q!.next = s;

    p = q;
    q = s;
    r = s ? s.next : null;
    s = r ? r.next : null;
  }
  return origin.next;
}
