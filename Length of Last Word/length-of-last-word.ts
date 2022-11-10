function lengthOfLastWord(s: string): number {
  let lastWordLength = 0;
  let sLength = s.length;

  for (let i = sLength - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (lastWordLength !== 0) return lastWordLength;
      continue;
    }
    lastWordLength++;
  }
  return lastWordLength;
}

lengthOfLastWord('Hello World');
