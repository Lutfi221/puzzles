export {};

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
// [1,2,3,4,null,null,5]
function maxDepth(root: Nully<TreeNode>): number {
  if (root == null) return 0;

  const nodeStack: TreeNode[] = [root];
  const depthStack: number[] = [1];

  let maxDepth = 0;

  while (nodeStack.length > 0) {
    const head = nodeStack.pop()!;
    const depth = depthStack.pop()!;
    maxDepth = depth > maxDepth ? depth : maxDepth;

    if (head.left) {
      nodeStack.push(head.left);
      depthStack.push(depth + 1);
    }
    if (head.right) {
      nodeStack.push(head.right);
      depthStack.push(depth + 1);
    }
  }

  return maxDepth;
}
