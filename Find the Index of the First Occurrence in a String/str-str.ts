function strStr(haystack: string, needle: string): number {
  let n = 0;
  for (let h = 0; h < haystack.length; h++) {
    if (haystack[h] === needle[n]) n++;
    else {
      h -= n;
      n = 0;
    }
    if (n === needle.length) return h - (needle.length - 1);
  }
  return -1;
}

console.log(strStr('sadbutsad', 'sad'));
console.log(strStr('sadbutsad', 'buts'));
console.log(strStr('leetcode', 'leeto'));
console.log(strStr('mississippi', 'issip'));
console.log(strStr('mississippi', 'pi'));
