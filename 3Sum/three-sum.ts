// Input: nums = [-1,0,1,2,-1,-4]
// (sorted):     [-4, -1, -1, 0, 1, 2]
// Output: [[-1,-1,2],[-1,0,1]]

function threeSum(nums: number[]): number[][] {
  const out: [number, number, number][] = [];
  let l = 0,
    m: number,
    r: number;

  nums.sort((a, b) => a - b);
  while (l <= nums.length - 3) {
    m = l + 1;
    r = nums.length - 1;
    while (m < r) {
      const sum = nums[l] + nums[m] + nums[r];

      if (sum === 0) {
        // Prevents duplicates
        while (nums[r] === nums[r - 1]) r--;
        while (nums[m] === nums[m + 1]) m++;
        while (nums[l] === nums[l + 1] && l + 1 < m) l++;

        out.push([nums[l], nums[m], nums[r]]);
        m++;
        r--;
        continue;
      }

      if (sum < 0) m++;
      else r--;
    }
    l++;
  }
  return out;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([0, 0, 0, 0]));
console.log(JSON.stringify(threeSum([-2, 0, 1, 1, 2])));
