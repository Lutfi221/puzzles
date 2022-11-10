function searchInsert(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let mid = Math.ceil(low + (high - low) / 2);
    if (target > nums[mid]) {
      low = mid + 1;
      continue;
    }
    if (nums[mid] === target) return mid;
    high = mid - 1;
  }
  return low;
}

console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 9));
console.log(searchInsert([1, 3, 5, 6], 0));
