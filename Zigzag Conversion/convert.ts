function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let out = '';
  let n = 0;
  let i = 0;
  while (i < s.length) {
    out += s[i];
    n++;
    i = (numRows - 1) * 2 * n;
  }

  let r = 1;
  while (r < numRows - 1) {
    n = 0;
    i = r;
    while (i < s.length) {
      out += s[i];
      n++;
      if (n % 2 == 0) i = (numRows - 1) * 2 * Math.ceil(n / 2) + r;
      else i = (numRows - 1) * 2 * Math.ceil(n / 2) - r;
    }
    r++;
  }

  n = 0;
  i = r;
  while (i < s.length) {
    out += s[i];
    n++;
    i = r + (numRows - 1) * 2 * n;
  }
  return out;
}

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));
