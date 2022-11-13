function reverse(x: number): number {
  let reversed = 0;
  const isNegative = x < 0;
  const MAX = 2 ** 31 - 1;
  const MIN = -(2 ** 31);

  while (x !== 0) {
    const digit = x % 10;
    if (isNegative && !(reversed >= (MIN - digit) / 10)) return 0;
    if (!isNegative && !(reversed <= (MAX - digit) / 10)) return 0;

    reversed = reversed * 10 + digit;
    x = isNegative ? Math.ceil(x / 10) : Math.floor(x / 10);
  }
  return reversed;
}

/**
 * Get i-th (zero-based) digit from the right.
 */
function getDigit(x: number, i: number): number {
  return Math.floor((x % 10 ** (i + 1)) / 10 ** i);
}

function reverseOld(x: number): number {
  /**
   * Number of digits in x
   */
  const len = Math.floor(Math.log10(Math.abs(x))) + 1;
  if (len <= 1) return x;

  const isNegative = x < 0;
  let output = 0;
  if (isNegative) x = -x;
  for (let i = 0; i < len; i++) {
    output += getDigit(x, i) * 10 ** (len - i - 1);
  }
  if (isNegative) return -output;
  return output;
}

export {};

console.log(reverse(123));
