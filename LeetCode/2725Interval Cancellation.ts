type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Fn = (...args: JSONValue[]) => void;

function cancellable(fn: Fn, args: JSONValue[], t: number): Function {
  let timeout: NodeJS.Timeout;
  const repeat = () => {
    timeout = setTimeout(() => {
      fn(...args);
      clearTimeout(timeout);
      repeat();
    }, t);
  };
  fn(...args);
  repeat();
  return () => {
    clearTimeout(timeout);
  };
}

const cancelTimeMs = 190;
const cancelFn = cancellable(
  (x: any) => {
    console.log(x * 2);
  },
  [4],
  35
);
setTimeout(cancelFn, cancelTimeMs);
