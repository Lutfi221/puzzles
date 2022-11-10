import { createBinaryTree, TreeNode } from '../@typings/index.js';

type Nully<T> = T | null | undefined;

function isBalanced(root: Nully<TreeNode>): boolean {
  if (!root) return true;

  const depthMap = new Map<Nully<TreeNode>, number>();
  const stack = [root];

  while (stack.length > 0) {
    const head = stack.pop()!;
    const l = head.left;
    const r = head.right;

    if (l == null && r == null) {
      depthMap.set(head, 1);
      continue;
    }

    // If we have all the information needed to compare the depth
    // of the left and right child.
    if ((l == null || depthMap.has(l)) && (r == null || depthMap.has(r))) {
      const leftDepth = l == null ? 0 : depthMap.get(l)!;
      const rightDepth = r == null ? 0 : depthMap.get(r)!;

      if (Math.abs(leftDepth - rightDepth) > 1) return false;
      depthMap.set(head, Math.max(leftDepth, rightDepth) + 1);
      continue;
    }

    stack.push(head);
    if (l != null) stack.push(l);
    if (r != null) stack.push(r);
  }
  return true;
}

function isBalancedRecursively(root: Nully<TreeNode>): boolean {
  if (!root) return true;
  return getMaxDepth(root)[1];
}

function getMaxDepth(root: TreeNode): [number, boolean] {
  let leftDepth = 0;
  let rightDepth = 0;

  let balanced = true;

  if (root.left) [leftDepth, balanced] = getMaxDepth(root.left);
  if (root.right) [rightDepth, balanced] = getMaxDepth(root.right);

  if (!balanced) return [-1, false];

  if (Math.abs(leftDepth - rightDepth) > 1) return [-1, false];

  return [Math.max(leftDepth, rightDepth) + 1, true];
}

console.log(isBalanced(createBinaryTree([1, null, 2, null, 3])));

export {};
