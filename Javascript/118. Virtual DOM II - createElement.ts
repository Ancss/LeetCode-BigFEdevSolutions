// Suppose you have solved above problem, now let's take a look at React.createElement():

import { MyElement } from "./113. Virtual DOM I"

// React.createElement(
//   type,
//   [props],
//   [...children]
// )
// First argument is type, it could be set to Custom Component, but here in this problem, it would only be HTML tag name
// Second argument is props, here in this problem, it would only be the (common) camelCased HTML attributes
// the rest arguments are the children, which in React supports many data types, but in this problem, it only has the element type of MyElement, or string for TextNode.
// You are asked to create your own createElement() and render(), so that following code could create the exact HTMLElement in 113. Virtual DOM I.

const h = createElement

render(h(
  'div',
  {},
  h('h1', {}, ' this is '),
  h(
    'p',
    { className: 'paragraph' },
    ' a ',
    h('button', {}, ' button '),
    ' from ',
    h('a',
      { href: 'https://bfe.dev' },
      h('b', {}, 'BFE'),
      '.dev'
    )
  )
))
// Notes

// The goal of this problem is not to create the replica of React implementation, you can have your own object representation format other than the one in 113. Virtual DOM I.

// Details about ref, key are ignored here, they will be put in other problems. Re-render is not covered here, it will be in another problem as well.
function createElement(type: string, props: MyElement, ...children: HTMLElement[] | string[]): HTMLElement {
  const ele = document.createElement(type)
  children.forEach(child => {
    if (typeof child === 'string') {
      child = document.createTextNode(child)
    }
    ele.append(child)
  })
  for (let [key, value] of Object.entries(props)) {
    if (key === 'className') {
      ele.classList.add(value)
    } else {
      ele.setAttribute(key, value)
    }
  }
  return ele
}

function render(myElement) {
  // your code here
  return myElement
}