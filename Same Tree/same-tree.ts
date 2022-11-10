class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * Can be null or undefined
 */
type Nully<T> = T | null | undefined;

function isSameTree(p: TreeNode | null, q?: TreeNode | null): boolean {
  const queue: Nully<TreeNode>[] = [p, q];
  while (queue.length > 0) {
    const s = queue.pop();
    const r = queue.pop();
    if (r == null && s == null) {
      continue;
    }
    if (r?.val !== s?.val) return false;
    queue.push(r?.left);
    queue.push(s?.left);
    queue.push(r?.right);
    queue.push(s?.right);
  }
  return true;
}

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3))
  )
);

export {};
