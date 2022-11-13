const MAX = 2 ** 31 - 1;
const MIN = -(2 ** 31);

function myAtoi(s: string): number {
  let out = 0;
  let isPositive = true;
  /**
   * 0 ->  Checking leading whitespaces
   *
   * 1 -> Checking the positive/negative sign
   *
   * 2 -> Reading the numbers
   */
  let phase = 0;

  for (let char of s) {
    if (phase === 0) {
      if (char === ' ') continue;
      phase = 1;
    }

    if (phase === 1) {
      phase = 2;
      if (char === '-') {
        isPositive = false;
        continue;
      }
      if (char === '+') continue;
    }

    if (phase === 2) {
      const digit = parseInt(char);

      if (isNaN(digit)) {
        break;
      }

      // Clamping logic
      if (isPositive && !(out <= (MAX - digit) / 10)) return MAX;
      if (!isPositive && !(-out >= (MIN + digit) / 10)) return MIN;

      out = out * 10 + digit;
    }
  }
  return isPositive ? out : -out;
}

console.log(myAtoi('-42'));
console.log(myAtoi('-2147483649'));
console.log(myAtoi('   4193 with words'));
