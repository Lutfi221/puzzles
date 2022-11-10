function longestCommonPrefix(strs: string[]): string {
  let c = 0;
  let commonPrefix = '';
  let firstWord = strs[0];
  while (c < firstWord.length) {
    for (let j = 1; j < strs.length; j++) {
      if (firstWord[c] !== strs[j][c]) return commonPrefix;
    }
    commonPrefix += firstWord[c];
    c++;
  }
  return firstWord;
}
