// Input: num = 58
// Output: "LVIII"
// Explanation: L = 50, V = 5, III = 3.

// Input: num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romans = [
  'M',
  'CM',
  'D',
  'CD',
  'C',
  'XC',
  'L',
  'XL',
  'X',
  'IX',
  'V',
  'IV',
  'I',
];

function intToRoman(num: number): string {
  let x = num;
  let out = '';
  while (x > 0) {
    for (let i = 0; i < vals.length; i++) {
      if (vals[i] > x) continue;

      const reps = Math.floor(x / vals[i]);

      out += romans[i].repeat(reps);
      x -= vals[i] * reps;
      break;
    }
  }
  return out;
}

console.log(intToRoman(1994));
