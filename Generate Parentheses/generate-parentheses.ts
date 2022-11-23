function generateParenthesis(n: number): string[] {
  let level = 1;
  let combinations = ['()'];

  while (level < n) {
    const next: string[] = [];
    for (let i = 0; i < combinations.length; i++) {
      next.push('(' + combinations[i] + ')');

      let c = '()' + combinations[i];
      if (!next.includes(c)) next.push(c);

      c = combinations[i] + '()';
      if (!next.includes(c)) next.push(c);
    }
    level++;
    combinations = next;
  }
  return combinations;
}

console.log(generateParenthesis(4));
