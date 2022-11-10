/**
 * Get the nth digit from a number
 * @param x The number
 * @param n The position of the digit from the right end starting from 1
 * @returns The digit
 */
function getDigit(x: number, n: number): number {
  return ((x % 10 ** n) - (x % 10 ** (n - 1))) / 10 ** (n - 1);
}

function isPalindrome(x: number): boolean {
  if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

  const digitsAmount = Math.floor(Math.log10(x) + 1);
  const halfDigitsAmount = digitsAmount / 2;

  for (let i = 1; i <= halfDigitsAmount; i++) {
    if (getDigit(x, i) !== getDigit(x, digitsAmount - i + 1)) return false;
  }

  return true;
}

export {};
