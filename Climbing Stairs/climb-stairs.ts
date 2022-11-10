//
// n = 1  -> 1
//  1
//  n = 2  -> 2
//   11,2
//  n = 3  -> 3
//   111,12,21
//  n = 4  -> 5
//   1111,112,121,211,22
//

const factorialCache: { [key: number]: number } = {
  0: 1,
};
function factorial(x: number): number {
  if (x in factorialCache) return factorialCache[x];
  let out = x;
  while (x > 1) {
    x--;
    out *= x;
  }
  factorialCache[x] = out;
  return out;
}

function climbStairs(n: number): number {
  let prev = 1;
  let curr = 1;
  let i = 1;
  while (i < n) {
    let originalCurr = curr;
    curr = prev + curr;
    prev = originalCurr;
    i++;
  }
  return curr;
}

console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(44));
