/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg) {
  // traverse the arg
  for ([key, value] of Object.entries(arg)) {
    // console.log(key,value)
    if (value === undefined) {
      arg[key] = null;
    } else if (typeof arg[key] === "object" && arg[key] !== null) {
      undefinedToNull(arg[key]);
    }
  }
  return arg;
}

console.log(undefinedToNull({ a: undefined, b: "BFE.dev" }));
// {a: null, b: 'BFE.dev'}

console.log(undefinedToNull({ a: ["BFE.dev", undefined, "bigfrontend.dev"] }));
// {a: ['BFE.dev', null, 'bigfrontend.dev']}

console.log(
  undefinedToNull(["BFE.dev", undefined, null, { a: ["BFE.dev", undefined] }])
);
// ['BFE.dev', null, null, {a: ['BFE.dev', undefined]}]
