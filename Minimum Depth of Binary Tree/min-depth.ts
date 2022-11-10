import { TreeNode } from '../@typings/index.js';

function minDepth(root: TreeNode | null): number {
  if (root == null) return 0;
  const nodeStack: TreeNode[] = [root];
  const depthStack: number[] = [1];
  let minDepth = Infinity;

  while (nodeStack.length > 0) {
    const head = nodeStack.pop();
    const depth = depthStack.pop()!;

    if (depth >= minDepth) continue;

    if (head?.left == null && head?.right == null) {
      if (depth < minDepth) minDepth = depth;
      continue;
    }

    if (head?.left != null) {
      nodeStack.push(head.left);
      depthStack.push(depth + 1);
    }

    if (head?.right != null) {
      nodeStack.push(head.right);
      depthStack.push(depth + 1);
    }
  }
  return minDepth;
}

function minDepthRecursively(root: TreeNode | null): number {
  if (root == null) return 0;
  if (root.left == null && root.right == null) {
    return 1;
  }

  if (root.right == null) return minDepthRecursively(root.left) + 1;
  if (root.left == null) return minDepthRecursively(root.right) + 1;

  return (
    Math.min(minDepthRecursively(root.left), minDepthRecursively(root.right)) +
    1
  );
}
