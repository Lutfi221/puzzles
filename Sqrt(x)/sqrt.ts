function mySqrt(x: number): number {
  let low = 0;
  let high = Math.round(x / 2);

  while (low <= high) {
    let mid = Math.round(low + (high - low) / 2);
    let midSquared = mid ** 2;

    if (midSquared > x) {
      high = mid - 1;
      continue;
    }

    if (midSquared == x) return mid;
    low = mid + 1;
  }

  if (low ** 2 > x) return low - 1;
  return low;
}

console.log(mySqrt(9));
console.log(mySqrt(81));
console.log(mySqrt(99));
console.log(mySqrt(8));
