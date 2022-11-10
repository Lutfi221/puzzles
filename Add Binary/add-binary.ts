function addBinary(a: string, b: string): string {
  let isCarrying = false;
  let i = 0;
  let out = '';

  while (i < a.length || i < b.length) {
    i++;
    const aDigit = a[a.length - i] || '0';
    const bDigit = b[b.length - i] || '0';
    let register = 0;

    if (aDigit === '1') register++;
    if (bDigit === '1') register++;
    if (isCarrying) {
      register++;
      isCarrying = false;
    }

    if (register === 0) {
      out = '0' + out;
      continue;
    }
    if (register === 1) {
      out = '1' + out;
      continue;
    }
    isCarrying = true;
    if (register === 2) {
      out = '0' + out;
      continue;
    }
    out = '1' + out;
  }

  if (isCarrying) out = '1' + out;
  return out;
}

console.log(addBinary('1010', '1011'));
console.log(addBinary('111', '1111'));
