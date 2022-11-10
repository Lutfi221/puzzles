const ROMAN_TO_VALUE = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const chars = s.split('');
  let out = 0;
  // @ts-ignore
  let now = ROMAN_TO_VALUE[chars[0]];

  for (let i = 1; i <= chars.length; i++) {
    // @ts-ignore
    const next = ROMAN_TO_VALUE[chars[i]] || -Infinity;

    if (now < next) {
      out -= now;
    } else {
      out += now;
    }
    now = next;
  }

  return out;
}
