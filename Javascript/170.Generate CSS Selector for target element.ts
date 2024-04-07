// Given a DOM tree and a target element, generate a valid selector to target it.

// For example, for a DOM tree like below

// <div>
//   <p>BFE.dev</p>
//   <div>
//     is
//     <p>
//       <span>great. <button>click me!</button></span>
//     </p>
//   </div>
// </div>
// There could be more than 1 answer.

// let selector = generateSelector(root, target) // 'button'
// expect(root.querySelector(selector)).toBe(target)

// selector = generateSelector(root, target) // 'div > div > p > button'
// expect(root.querySelector(selector)).toBe(target)



// This is a JavaScript coding problem from BFE.dev 
// https://bigfrontend.dev/problem/generate-selector
/**
 * @param {HTMLElement} root
 * @param {HTMLElement} target
 * @return {string}
 */

function generateSelector(root: HTMLElement, target: HTMLElement): string {
  if (target.id) { return `#${target.id}` }
  let breakKey = false
  let selector = ''
  dfs(root, [])

  function dfs(element: HTMLElement, routePath: string[]): boolean {
    if (element === target) {
      selector = routePath.join(' ')
      return true
    }
    for (let child of [...element.children]) {
      if (breakKey === true) { break }
      if (child.children) {
        routePath.push(child.tagName.toLowerCase())
        breakKey = dfs(child as HTMLElement, routePath)
        routePath.pop()
      }
    }
    return false
  }
  return selector
}

