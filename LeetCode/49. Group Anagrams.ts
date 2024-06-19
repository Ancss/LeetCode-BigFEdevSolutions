// function groupAnagrams(strs: string[]): string[][] {
//   if (strs.length === 1) return [[strs[0]]];
//   const results: string[][] = [];
//   for (let i = 0; i < strs.length; i++) {
//     const map = strs[i].split("").reduce((acc, c) => {
//       acc.set(c, acc.has(c) ? acc.get(c)! + 1 : 1);
//       return acc;
//     }, new Map<string, number>());
//     const strSet: string[] = [];
//     strSet.push(strs[i]);

//     for (let j = i + 1; j < strs.length; j++) {
//       if (strs[j].length !== strs[i].length) continue;
//       const map2 = new Map(map);
//       for (let k = 0; k < strs[j].length; k++) {
//         if (!map2.has(strs[j][k])) {
//           break;
//         } else {
//           map2.set(strs[j][k], map2.get(strs[j][k])! - 1);
//           if (map2.get(strs[j][k]) === 0) {
//             map2.delete(strs[j][k]);
//           }
//           continue;
//         }
//       }
//       if (
//         (map2.size === 0 && strs[i] !== "") ||
//         (strs[j] === "" && strs[i] === "")
//       ) {
//         strSet.push(strs[j]);
//         strs.splice(j, 1);
//         j--;
//       }
//     }
//     results.push(strSet);
//   }
//   return results;
// }

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();
  const res: string[][] = [];

  for (let str of strs) {
    const og = str;
    const sorted = str.split("").sort().join("");
    if (!map.has(sorted)) {
      const arr = [og];
      res.push(arr);
      map.set(sorted, arr);
    } else {
      const resArr = map.get(sorted);
      resArr.push(og);
      map.set(sorted, resArr);
    }
  }
  return res;
}
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(
  groupAnagrams([
    "eat",
    "tea",
    "tan",
    "ate",
    "nat",
    "bat",
    "ac",
    "bd",
    "aac",
    "bbd",
    "aacc",
    "bbdd",
    "acc",
    "bdd",
  ])
);
// console.log(groupAnagrams(["", ""]));
