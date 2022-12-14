import { TreeNode } from '../@typings/index';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root == null) return false;
  if (root.left == null && root.right == null) return root.val === targetSum;
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
