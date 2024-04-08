// Given a DOM tree and a target element, please return the previous left sibling.


// Like above, the previous left sibling of green <a/> is the blue <button/>. Notice that they don't necessarily have the same parent element.

// If no left sibling, then return null.

// What is time & space cost of your solution ?

function previousLeftSibling(root: Element, target: Element): Element | null {
  if (!root || !target) return null
  const queue = [root]
  while (queue.length) {
    let prev: Element | null = null
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const current = queue.shift()
      if (current === target) return prev
      prev = current!
      if (current?.children) {
        queue.push(...current.children)
      }
    }

  }
  return null
}
