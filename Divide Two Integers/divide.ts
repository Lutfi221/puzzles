// 4 / 2 = 2

const MIN = (-2) ** 31;
const MAX = 2 ** 31 - 1;

function divide(dividend: number, divisor: number): number {
  let resultPositive = dividend < 0 === divisor < 0;
  let a = Math.abs(dividend);
  let b = Math.abs(divisor);
  let result = 0;
  let count = 0;

  if (b === 1) {
    if (resultPositive) {
      if (a > MAX) return MAX;
      return a;
    }
    if (-a < MIN) return MIN;
    return -a;
  }

  while (count <= a) {
    result++;
    count += b;
  }
  if (resultPositive) return result - 1;
  return -result + 1;
}

const start = performance.now();

console.log(divide(4, 2));
console.log(divide(16, 4));
console.log(divide(10000, 5));
console.log(divide(-2147483648, -1));
console.log(divide(-2147483648, -3));

const end = performance.now();

console.log('TIME: ' + (end - start));

export {};
