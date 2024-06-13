type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
  // make sure the object is not primitive
  if (typeof obj !== "object" || obj === null) return obj;
  const newObj = Array.isArray(obj) ? [] : {};
  for (let [key, value] of Object.entries(obj)) {
    // if the value is an object,call the compactObject function recursively
    if (typeof value === "object" && value !== null) {
      newObj[key] = compactObject(value);
    } else if (Boolean(value)) {
      newObj[key] = value;
    }
  }
  return Array.isArray(obj) ? (newObj as JSONValue[]).filter(Boolean) : newObj;
}

console.log(compactObject({ a: null, b: [false, 1] }));
export {};
