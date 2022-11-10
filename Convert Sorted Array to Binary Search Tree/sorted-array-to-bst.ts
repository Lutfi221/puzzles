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

function sortedArrayToBSTIteratively(nums: number[]): TreeNode | null {
  const lowsQueue: number[] = [0];
  const highsQueue: number[] = [nums.length - 1];
  /**
   * As the origin of the tree. This should not be returned.
   */
  const origin = new TreeNode();
  const nodesQueue: TreeNode[] = [origin];
  const isLowerQueue: boolean[] = [true];

  while (lowsQueue.length > 0) {
    const low = lowsQueue.shift()!;
    const high = highsQueue.shift()!;
    const isLower = isLowerQueue.shift()!;
    const parent = nodesQueue.shift()!;

    if (low > high) continue;

    const mid = Math.ceil((low + high) / 2);
    const node = new TreeNode(nums[mid]);

    if (isLower) parent.left = node;
    else parent.right = node;

    if (low === high) continue;

    lowsQueue.push(low);
    highsQueue.push(mid - 1);
    isLowerQueue.push(true);
    nodesQueue.push(node);

    lowsQueue.push(mid + 1);
    highsQueue.push(high);
    isLowerQueue.push(false);
    nodesQueue.push(node);
  }

  return origin.left;
}

function sortedArrayToBSTRecursively(nums: number[]): TreeNode | null {
  return helper(nums, 0, nums.length - 1);
}

function helper(nums: number[], low: number, high: number): TreeNode | null {
  if (low === high) return new TreeNode(nums[low]);
  if (low > high) return null;
  const mid = Math.ceil((low + high) / 2);
  return new TreeNode(
    nums[mid],
    helper(nums, low, mid - 1),
    helper(nums, mid + 1, high)
  );
}

export {};
