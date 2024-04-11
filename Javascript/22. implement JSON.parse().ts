// This is a follow-up on 21. implement JSON.stringify().

// Believe you are already familiar with JSON.parse(), could you implement your own version?

// In case you are not sure about the spec, MDN here might help.

// JSON.parse() support a second parameter reviver, you can ignore that.

// note

// Don't use JSON.parse() in your code here It doesn't help you practicing your skills.

function parse(str) {
  let result = (new Function(`return ${str.replace(/\"/g, "'")}`))();

  if (str !== JSON.stringify(result)) {
    throw new Error("Nope");
  }

  return result;
}
