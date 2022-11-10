/**
 * 1
 * 1 1
 * 1 2 1
 * 1 3 3 1
 * 1 4 6 4 1
 * 1 5 10 10 5 1
 * 1 6 15 29 15 6 1
 */

function getRow(rowIndex: number): number[] {
  if (rowIndex == 0) return [1];

  const row: number[] = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j >= 1; j--) {
      row[j] += row[j - 1];
    }
  }
  return row;
}

function getRowOld(rowIndex: number): number[] {
  let row = [1];
  if (rowIndex == 0) return row;
  for (let i = 1; i <= rowIndex; i++) {
    const nextRow = [1];
    for (let j = 1; j < i; j++) {
      nextRow.push(row[j] + row[j - 1]);
    }
    nextRow.push(1);
    row = nextRow;
  }
  return row;
}

console.log(getRow(2));
console.log(getRow(3));
