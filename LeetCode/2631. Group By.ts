declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const map = {};
  this.forEach((item) => {
    const key = fn(item);
    map[key] = map[key] || [];
    map[key].push(item);
  });
  return map;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

export {};
