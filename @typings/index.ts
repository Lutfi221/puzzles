export type Nully<T> = T | null | undefined;

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

  toList(): number[] {
    let list = [this.val];
    let head = this.next;

    while (head) {
      list.push(head.val);
      head = head.next;
    }

    return list;
  }
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function createLinkedList(values: number[]): ListNode {
  const origin = new ListNode(values[0]);
  let head = origin;

  for (let i = 1; i < values.length; i++) {
    head.next = new ListNode(values[i]);
    head = head.next!;
  }

  return origin;
}

export function createBinaryTree(values: (number | null)[]): TreeNode | null {
  if (values[0] == null) return null;
  const root = new TreeNode(values[0]);

  let level: Nully<TreeNode>[] = [root];
  /**
   * Inclusive range of the index.
   */
  let levelRange: [number, number] = [0, 0];

  while (levelRange[0] < values.length) {
    const nextLevel: Nully<TreeNode>[] = [];
    const [a, b] = levelRange;

    /**
     * How many nodes in the previous level.
     */
    const n = b - a + 1;

    const newA = a + n;
    const nextLevelRange: [number, number] = [newA, newA + n * 2 - 1];

    let i = newA;
    for (; i < values.length && i <= nextLevelRange[1]; i++) {
      const isRightChild = i % 2 == 0;
      const parentIndexInLevel = Math.floor((i - newA) / 2);
      const value = values[i];

      if (value === null) continue;
      const child = new TreeNode(value);

      if (isRightChild) level[parentIndexInLevel]!.right = child;
      else level[parentIndexInLevel]!.left = child;

      nextLevel.push(child);
    }

    level = nextLevel;
    levelRange = nextLevelRange;
  }
  return root;
}
