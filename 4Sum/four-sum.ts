// Input: nums = [1,0,-1,0,-2,2], target = 0
// (Sorted) [-2, -1, 0, 0, 1, 2]
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

function fourSum(nums: number[], target: number): number[][] {
  nums.sort((a, b) => a - b);
  let a = 0;
  let b: number, c: number, d: number;
  let out: number[][] = [];
  while (a <= nums.length - 4) {
    b = a + 1;
    c = a + 2;
    while (b < c) {
      c = b + 1;
      d = nums.length - 1;
      while (c < d) {
        const sum = nums[a] + nums[b] + nums[c] + nums[d];

        if (sum === target) {
          while (nums[c] === nums[c + 1] && c <= d) c++;
          while (nums[d] === nums[d - 1] && c <= d) d--;
          while (nums[b] === nums[b + 1] && b <= c) b++;
          while (nums[a] === nums[a + 1] && a <= b) a++;

          out.push([nums[a], nums[b], nums[c], nums[d]]);
          c++;
          d--;
        } else if (sum < target) c++;
        else d--;
      }
      b++;
    }
    a++;
  }

  return out;
}

console.log(JSON.stringify(fourSum([1, 0, -1, 0, -2, 2], 0)));
