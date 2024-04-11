// Given two same DOM tree B, B, and an Element a in A, find the corresponding Element b in B.


// By corresponding, we mean a and b have the same relative position to their DOM tree root.

// follow up

// This could be a problem on general Tree structure with only children.

// Could you solve it recursively and iteratively?

// Could you solve this problem with special DOM api for better performance?

// What are the time cost for each solution?

/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */

// dfs
// const findCorrespondingNode = (rootA: HTMLElement, rootB: HTMLElement, target: HTMLElement) => {
//   const stack: HTMLElement[][] = [[rootA, rootB]]
//   while (stack.length) {
//     const [targetA, targetB] = stack.shift()!
//     if (targetA === target) return targetB;
//     for (let i = 0; i < targetA.children.length; i++) {
//       stack.push([targetA.children[i] as HTMLElement, targetB.children[i] as HTMLElement])
//     }
//   }
// }

// recursive
// const findCorrespondingNode = (rootA: HTMLElement, rootB: HTMLElement, target: HTMLElement) => {
//   if (rootA === target) return rootB
//   for (let i = 0; i < rootA.children.length; i++) {
//     const result = findCorrespondingNode(rootA.children[i] as HTMLElement, rootB.children[i] as HTMLElement, target)
//     if (result) { return result }
//   }

// }

// bfs
const findCorrespondingNode = (rootA: HTMLElement, rootB: HTMLElement, target: HTMLElement) => {
  const queueA = [rootA]
  const queueB = [rootB]


  while (queueA.length) {
    const targetA = queueA.shift()
    const targetB = queueB.shift()
    if (targetA === target) { return targetB }
    if ((targetA).hasChildNodes()) {
      queueA.push(...targetA.children)
      queueB.push(...targetB?.children)
    }
  }
}
