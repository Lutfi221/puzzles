import { createBinaryTree, TreeNode, Nully } from '../@typings/index.js';

function isSymmetricRecursive(root: TreeNode | null): boolean {
  return isMirrored(root?.left, root?.right);
}

function isMirrored(left: Nully<TreeNode>, right: Nully<TreeNode>): boolean {
  if (left == null && right == null) return true;
  if (left?.val !== right?.val) return false;
  return (
    isMirrored(left?.left, right?.right) && isMirrored(left?.right, right?.left)
  );
}

function isSymmetricIterative(root: TreeNode | null): boolean {
  const queue: Nully<TreeNode>[] = [root?.left, root?.right];
  while (queue.length > 0) {
    let q = queue.pop();
    let p = queue.pop();

    if (p == null && q == null) continue;
    if (p?.val !== q?.val) return false;

    queue.push(p?.left);
    queue.push(q?.right);
    queue.push(p?.right);
    queue.push(q?.left);
  }
  return true;
}

console.log(isSymmetricRecursive(createBinaryTree([1, 2, 2, 3, 4, 4, 3])));
console.log(
  isSymmetricRecursive(createBinaryTree([1, 2, 2, null, 3, null, 3]))
);

export {};
