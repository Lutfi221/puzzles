// https://leetcode.com/problems/merge-two-sorted-lists/submissions/

import { Nully } from '../@typings/index';

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function toLinkedList(vals: number[]): ListNode {
  let nextNode: ListNode | undefined;
  for (let i = vals.length - 1; i >= 0; i--) {
    nextNode = new ListNode(vals[i], nextNode);
  }
  return nextNode!;
}

function toList(listNode: Nully<ListNode>): number[] {
  const out: number[] = [];
  let head: Nully<ListNode> = listNode;
  while (head) {
    out.push(head.val);
    head = head.next;
  }
  return out;
}

// speed: O(n)
// memory: O(1)
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  else if (list2 === null) return list1;

  let head: Nully<ListNode>;
  let a: Nully<ListNode> = list1;
  let b: Nully<ListNode> = list2;

  while (a && b) {
    if (a.val < b.val) {
      if (head) head.next = a;
      head = a;
      a = a.next;
      continue;
    }
    if (head) head.next = b;
    head = b;
    b = b.next;
  }

  // Handles the last element
  if (a === null) head!.next = b;
  else head!.next = a;

  return list1.val < list2.val ? list1 : list2;
}

console.log(
  toList(mergeTwoLists(toLinkedList([1, 2, 4]), toLinkedList([1, 3, 4])))
);
