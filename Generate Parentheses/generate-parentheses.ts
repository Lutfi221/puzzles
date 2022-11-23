function generateParenthesis(n: number): string[] {
  const stack: (string | number)[] = ['', 0, 0];
  const out: string[] = [];

  while (stack.length > 0) {
    const closes = stack.pop() as number;
    const opens = stack.pop() as number;
    const s = stack.pop() as string;

    if (opens === n && closes === n) out.push(s);
    if (opens < n) stack.push(s + '(', opens + 1, closes);
    if (closes < opens) stack.push(s + ')', opens, closes + 1);
  }

  return out;
}

function g(out: string[], s: string, n: number, opens: number, closes: number) {
  if (opens === n && closes === n) out.push(s);
  if (opens < n) g(out, s + '(', n, opens + 1, closes);
  if (closes < opens) g(out, s + ')', n, opens, closes + 1);
}

function generateParenthesisRecursively(n: number): string[] {
  const out: string[] = [];
  g(out, '', n, 0, 0);
  return out;
}

console.log(generateParenthesis(3));
