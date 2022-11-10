function lengthOfLongestSubstring(s: string): number {
  const charToClosestIndex = new Map<string, number>();
  let i = 0;
  let tail = 0;
  let longestLength = 0;

  for (; i < s.length; i++) {
    if (charToClosestIndex.has(s[i])) {
      longestLength = Math.max(longestLength, i - tail);
      tail = Math.max(charToClosestIndex.get(s[i])! + 1, tail);
    }
    charToClosestIndex.set(s[i], i);
  }

  return Math.max(longestLength, i - tail);
}

console.log(lengthOfLongestSubstring('abba'));
