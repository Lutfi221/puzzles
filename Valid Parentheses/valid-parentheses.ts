const OPEN_PARENTHESES_CHARS = ['{', '[', '('];
const CLOSE_TO_OPEN_PARENTHESES = {
  '}': '{',
  ']': '[',
  ')': '(',
};

function isValid(s: string): boolean {
  const unclosedParentheses: string[] = [];
  for (let char of s) {
    if (OPEN_PARENTHESES_CHARS.includes(char)) {
      unclosedParentheses.push(char);
      continue;
    }

    if (
      // @ts-ignore
      CLOSE_TO_OPEN_PARENTHESES[char] ===
      unclosedParentheses[unclosedParentheses.length - 1]
    ) {
      unclosedParentheses.pop();
      continue;
    }

    return false;
  }

  return unclosedParentheses.length === 0;
}
