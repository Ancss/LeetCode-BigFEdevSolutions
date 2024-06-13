export {};
type Fn<T> = () => Promise<T>;

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  const results: any[] = [];
  // first return a promise
  return new Promise((resolve, reject) => {
    // loop through the functions and call them and record the result
    functions.forEach((fn, i) => {
      fn()
        .then((res) => {
          results[i] = res;
          console.log(results);
          if (
            functions.length ===
            results.filter((item) => typeof item !== "undefined").length
          ) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(703), 45)),
  () => new Promise((resolve) => setTimeout(() => resolve(0), 125)),
  () => new Promise((resolve) => setTimeout(() => resolve(false), 100)),
  () => new Promise((resolve) => setTimeout(() => resolve(true), 80)),
]);
promise.then(console.log); // [42]
