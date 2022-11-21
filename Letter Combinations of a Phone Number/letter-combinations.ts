const BTN_MAP: { [digit: string]: string } = {
  '2': 'abc',
  '3': 'def',
  '4': 'ghi',
  '5': 'jkl',
  '6': 'mno',
  '7': 'pqrs',
  '8': 'tuv',
  '9': 'wxyz',
};

function letterCombinations(digits: string) {
  if (digits === '') return [];

  const letterGroups: string[][] = [];

  for (let digit of digits) {
    letterGroups.push(BTN_MAP[digit].split(''));
  }

  let combinations: string[] = letterGroups[0];

  let depth = 1;
  while (depth < letterGroups.length) {
    const newCombinations: string[] = [];
    for (let combination of combinations) {
      for (let letter of letterGroups[depth]) {
        newCombinations.push(combination + letter);
      }
    }
    combinations = newCombinations;
    depth++;
  }

  return combinations;
}

console.log(letterCombinations('23'));
