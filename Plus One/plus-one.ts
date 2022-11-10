function plusOne(digits: number[]): number[] {
  let isCarrying = true;
  let i = digits.length;
  while (isCarrying) {
    i--;

    if (i < 0) {
      digits.unshift(1);
      return digits;
    }

    if (digits[i] === 9) {
      digits[i] = 0;
      continue;
    }

    digits[i] += 1;
    isCarrying = false;
  }
  return digits;
}

console.log(plusOne([9, 9]));
console.log(plusOne([1, 1, 9]));
console.log(plusOne([1, 2, 3, 4]));
