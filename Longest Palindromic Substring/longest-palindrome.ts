function longestPalindrome(s: string): string {
  if (s.length <= 1) return s;
  let startOfLongest = 0;
  let longestLength = 1;

  for (let i = 0; i < s.length; i++) {
    let right = i;
    let left = i;

    while (s.charAt(right + 1) === s.charAt(i) && s.charAt(i)) {
      right++;
    }

    while (s.charAt(left - 1) === s.charAt(right + 1) && s.charAt(right + 1)) {
      left--;
      right++;
    }

    if (right - left + 1 > longestLength) {
      longestLength = right - left + 1;
      startOfLongest = left;
    }
  }

  return s.slice(startOfLongest, startOfLongest + longestLength);
}

function longestPalindromeOld(s: string): string {
  if (s.length <= 1) return s;
  /**
   * Center of window
   */
  let c = 1;
  let longestLength = 1;
  let longestPalindrome = s[0];

  while (c < s.length) {
    // Checks for an odd-length palindrome
    let radius = 0;
    while (
      s[c - (radius + 1)] === s[c + (radius + 1)] &&
      s[c - (radius + 1)] !== undefined
    ) {
      radius++;
    }

    let windowWidth = 1 + radius * 2;
    if (windowWidth > longestLength) {
      longestLength = windowWidth;
      longestPalindrome = s.slice(c - radius, c + radius + 1);
    }

    // Checks for an even-length palindrome
    radius = 0;
    while (
      s[c - 1 - radius] === s[c + radius] &&
      s[c - 1 - radius] !== undefined
    ) {
      radius++;
    }

    windowWidth = 2 * radius;
    if (windowWidth > longestLength) {
      longestLength = windowWidth;
      longestPalindrome = s.slice(c - radius, c + radius);
    }

    c++;
  }
  return longestPalindrome;
}

console.log(longestPalindrome('babad'));
console.log(longestPalindrome('cbbd'));
console.log(longestPalindrome('ccc'));
console.log(longestPalindrome('bb'));
