type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type ArrayType = { id: number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const map = {};
  for (const obj of arr1) {
    map[obj.id] = obj;
  }
  for (const obj of arr2) {
    if (map[obj.id] !== undefined) {
      map[obj.id] = { ...map[obj.id], ...obj };
    } else {
      map[obj.id] = obj;
    }
  }
  return Object.values(map);
}

export {};
