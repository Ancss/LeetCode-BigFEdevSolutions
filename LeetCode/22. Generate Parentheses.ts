function generateParenthesis(n: number): string[] {
  // 1 ()
  // 2 (()), ()()
  // 3 ((())), (()()), (())(), ()(()), ()()()
  const result: string[] = [];

  function recurse(openParens: number, closedParens: number, combo: string) {
    if (openParens === 0 && closedParens === 0) {
      result.push(combo);
      return;
    }

    // if there are open parens to close
    if (openParens < closedParens) {
      recurse(openParens, closedParens - 1, combo + ")");
    }

    // if there are open parens left to use
    if (openParens > 0) {
      recurse(openParens - 1, closedParens, combo + "(");
    }
  }

  recurse(n, n, "");

  return result;
}
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
