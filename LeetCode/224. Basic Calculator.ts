const map = {
  "+": (a: number, b: number) => a + b,
  "-": (a: number, b: number) => a - b,
};
function calculate(s: string): number {
  if (s.length === 0) return 0;
  if (Number(s) === Number(s)) return Number(s);
  let stack: string[] = [];
  let lastChar = "";
  for (let char of s) {
    if (char === " ") continue;
    if (char === ")") {
      const index = stack.lastIndexOf("(");
      // console.log(index, stack);
      if (index > -1) {
        const sliceStack = stack.slice(index + 1);
        stack = stack.slice(0, index);
        let sum = "";
        if (sliceStack.length <= 2) {
          sum = sliceStack.join("");
        } else {
          sum = numberCalculate(sliceStack);
        }
        stack.push(sum);
      }
    } else if (char === "(") {
      stack.push("(");
    } else {
      if (
        Number(char) === Number(char) &&
        Number(lastChar) === Number(lastChar) &&
        lastChar !== ""
      ) {
        const value = stack.pop();
        stack.push(value + char);
      } else {
        stack.push(char);
      }
    }
    lastChar = char;
  }
  console.log(stack);
  if (stack.length > 1) {
    return numberCalculate(stack);
  }
  return Number(stack[0]);
}

function numberCalculate(stack) {
  let sum = stack.shift();
  if (sum === "-") {
    sum = sum + stack.shift();
    if (sum.startsWith("--")) {
      sum = sum.replace("--", "");
    }
  }
  while (stack.length) {
    const operator = stack.shift();
    const number = stack.shift();
    sum = map[operator](parseInt(sum), parseInt(number));
  }
  return sum;
}
// console.log(calculate("1 + 1")); // 2
// console.log(calculate(" 2-1 + 2 ")); // 3
// console.log(calculate("(1+(4+5+2)-3)+(6+8)")); // 23
// console.log(calculate("2147483647"));
console.log(calculate("-(-2)+4"));
