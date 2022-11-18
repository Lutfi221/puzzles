// Input: nums = [-1,2,1,-4], target = 1
// (sorted) [-4, -1, 1, 2]
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function threeSumClosest(nums: number[], target: number): number {
  nums.sort();
  let l = 0,
    m: number,
    r: number;
  let closest = nums[0] + nums[1] + nums[2];
  let closestDistance = Math.abs(closest - target);
  while (l < nums.length - 2) {
    m = l + 1;
    r = nums.length - 1;

    while (m < r) {
      const sum = nums[l] + nums[m] + nums[r];
      const d = Math.abs(sum - target);

      if (d < closestDistance) {
        closest = sum;
        closestDistance = d;
      }

      if (sum < target) m++;
      else r--;
    }
    l++;
  }
  return closest;
}

console.log(threeSumClosest([-1, 2, 1, -4], -1));
