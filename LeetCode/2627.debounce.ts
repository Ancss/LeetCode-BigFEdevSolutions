export {};

type F = (...args: number[]) => void;

function debounce(fn: F, t: number): F {
  if (t < 0) throw new Error("time should be greater than 0");
  if (typeof fn !== "function") throw new Error("fn should be a function");
  if (fn.length > 0) throw new Error("function should not have any arguments");
  // first create a timeout variable
  let timeout: NodeJS.Timeout;
  // got to return a function
  return function (...args) {
    // if timeout is set,clear it
    clearTimeout(timeout);
    // set the timeout to the setTimeout function
    timeout = setTimeout(() => {
      // call the fn with the args
      fn(...args);
      clearTimeout(timeout);
    }, t);
  };
}

let start = Date.now();
function log(...inputs) {
  console.log([Date.now() - start, inputs]);
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);
