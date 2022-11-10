import { ListNode } from '../@typings/index';

// speed: O(n)
// memory: O(1)
function removeDuplicates(nums: number[]): number {
  let prev: number;
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] === prev!) {
      nums.splice(i, 1);
    }
    prev = nums[i];
  }
  return nums.length;
}

(() => {
  let a = [1, 1, 2, 3, 3, 4, 5, 5];
  console.log(removeDuplicates(a));
  console.log(a);
})();
