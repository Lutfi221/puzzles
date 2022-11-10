// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

function isPalindrome(s: string): boolean {
  let i = 0;
  let j = s.length - 1;
  let pattern = /[a-z0-9]/i;
  while (i < j) {
    if (!pattern.test(s[i])) {
      i++;
      continue;
    }

    if (!pattern.test(s[j])) {
      j--;
      continue;
    }

    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }

    i++;
    j--;
  }
  return true;
}
