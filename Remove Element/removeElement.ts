function removeElement(nums: number[], val: number): number {
  let newLength = nums.length;
  let i = 0;
  while (i < newLength) {
    if (nums[i] === val) {
      nums[i] = nums[--newLength];
      continue;
    }
    i++;
  }
  return newLength;
}

(() => {
  let a = [1, 9, 3, 2, 3, 3];

  console.log(removeElement(a, 3));
  console.log(a);
})();
