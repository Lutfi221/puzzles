/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1;
  let j = n - 1;
  while (i >= 0 || j >= 0) {
    if (i < 0) {
      nums1[j] = nums2[j];
      j--;
      continue;
    }
    if (i < 0) {
      return;
    }
    if (nums1[i] < nums2[j]) {
      nums1[i + j + 1] = nums2[j];
      j--;
      continue;
    }
    nums1[i + j + 1] = nums1[i];
    i--;
  }
}

// [9999, 999, 0, 0] and [1, 2]

// [1, 2, 0, 0] and [999, 9999]

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]

let xx = [1, 2, 3, 0, 0, 0];
merge(xx, 3, [2, 5, 6], 3);
console.log(xx);
