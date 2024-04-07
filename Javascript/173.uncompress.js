// Given a compressed string, return its original form.

// For example.

/**
 * @param {string} str
 * @returns {string}
 */
// function uncompress(str) {
//   // replace the text by using regexp
//   const result = str.replace(/(\d+)\(([a-zA-Z]*)\)/gi, (_, $1, $2) => {
//     console.log($1, $2);
//     return $2.repeat($1);
//   });
//   return result.includes("(") ? uncompress(result) : result;
// }

// another way to implemented
function uncompress(str) {
  const countStack = [];
  const charStack = [""];
  let n = 0;
  // traverse char step by step
  for (char of str) {
    if (/\d/.test(char)) {
      // countStack.push(countStack.pop() + Number(char));
      n += Number(char);
    } else if (char === "(") {
      countStack.push(n);
      n = 0
      charStack.push("");
    } else if (char === ")") {
      const lastStr = charStack.pop();
      const times = countStack.pop();
     
      charStack.push(charStack.pop() + lastStr.repeat(times));
    } else {
      charStack.push(charStack.pop() + char);
    }
  }
  return charStack.pop();
}

console.log(uncompress("3(ab)")); // 'ababab'
console.log(uncompress("3(ab2(c))")); // 'abccabccabcc'
// a number k followed by a pair of parenthesis, meaning to repeat the substring inside the parenthesis by k times, k is positive integer.
// inputs are guaranteed to be valid input like above example, there is no numerical digit in original form.
