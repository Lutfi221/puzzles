import { createBinaryTree, TreeNode } from '../@typings/index.js';

function inorderTraversal(root: TreeNode | null): number[] {
  const isLeftTraversed: boolean[] = [];
  const isRightTraversed: boolean[] = [];
  const tail = [root];
  const out: number[] = [];

  let head = root;
  let depth = 0;

  while (depth >= 0) {
    if (head === null || (isLeftTraversed[depth] && isRightTraversed[depth])) {
      head = tail[depth - 1];
      isLeftTraversed[depth] = false;
      isRightTraversed[depth] = false;
      depth--;
      continue;
    }

    if (!isLeftTraversed[depth]) {
      isLeftTraversed[depth] = true;
      depth++;
      head = head.left;
      tail[depth] = head;
      continue;
    }

    out.push(head.val);
    isRightTraversed[depth] = true;
    depth++;
    head = head.right;
    tail[depth] = head;
  }
  return out;
}

console.log(
  inorderTraversal(new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3))))
);

console.log(inorderTraversal(createBinaryTree([1, null, 2, 3])));
