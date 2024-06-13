export {};
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        clearTimeout(timer);
        reject("Time Limit Exceeded");
      }, t);
      fn(...args)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };
}

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
const inputs = [5];
const t = 50;
const limited = timeLimit(fn, t);
const start = performance.now();
let result;
try {
  const res = await limited(...inputs);
  result = { resolved: res, time: Math.floor(performance.now() - start) };
} catch (err) {
  result = { rejected: err, time: Math.floor(performance.now() - start) };
}
console.log(result); // Output: {"resolved": 42, "time": 50}
