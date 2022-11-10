// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums: number[], target: number): number[] {
  const numToIndex: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let a = target - nums[i];
    if (a in numToIndex) {
      return [i, numToIndex[a]];
    }
    numToIndex[nums[i]] = i;
  }
  return [];
}
