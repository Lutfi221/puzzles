/**
 * 1
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 1 4 6 4 1
 */

function generate(numRows: number): number[][] {
  const triangle: number[][] = [[1]];

  for (let i = 1; i < numRows; i++) {
    triangle[i] = [1];
    for (let j = 1; j < i; j++) {
      triangle[i].push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
    }
    triangle[i].push(1);
  }

  return triangle;
}
