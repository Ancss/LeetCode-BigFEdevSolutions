// In problem 118, you are asked to implement createElement() and render() function which supports intrinsic HTML elements, like <p/>, <div/> etc.

// In this problem, you are ask to support custom Functional Component.

// Functional Component are functions that:

// accept single object argument -props, which contains children, className and other properties.
// returns an MyElement by calling createElement().
// Say we have a Functional Component - Title

// const h = createElement
// const Title = ({children, ...res}) => h('h1', res, ...children)
// Then we should be able to use it in createElement and render(), just the same way as an intrinsic element.

// h(Title, {}, 'This is a title')

// h(Title, {className: 'class1'}, 'This is a title')
// Please modify your createElement() and render() from 118. Virtual DOM II - createElement if necessary, so that the example in problem 118 could be rewritten as below:

function createElement(type, props, ...children): HTMLElement {
  if (typeof type === 'function') {
    return type({ children, ...props })
  }
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


/**
 * @param { MyElement }
 * @returns { HTMLElement } 
 */
function render(myElement: any) {
  return myElement

}

const h = createElement
const Link =
  ({ children, ...res }:any): any => h('a', res, ...children)
const Name =
  ({ children, ...res }:any): any => h('b', res, ...children)
const Button =
  ({ children, ...res }:any): any => h('button', res, ...children)
const Paragraph =
  ({ children, ...res }:any): any => h('p', res, ...children)
const Container =
  ({ children, ...res }:any): any => h('div', res, ...children)

const res = h(
  Container,
  {},
  // h(Title, {}, ' this is '),
  h(
    Paragraph,
    { className: 'paragraph' },
    ' a ',
    h(Button, {}, ' button '),
    ' from ',
    h(
      Link,
      { href: 'https://bfe.dev' },
      h(Name, {}, 'BFE'),
      '.dev')
  )
)
console.log(JSON.stringify(res,null,2))

// {
//   "type": "div",
//   "props": {
//     "children": [
//       {
//         "type": "p",
//         "props": {
//           "className": "paragraph",
//           "children": [
//             " a ",
//             {
//               "type": "button",
//               "props": {
//                 "children": [
//                   " button "
//                 ]
//               }
//             },
//             " from ",
//             {
//               "type": "a",
//               "props": {
//                 "href": "https://bfe.dev",
//                 "children": [
//                   {
//                     "type": "b",
//                     "props": {
//                       "children": [
//                         "BFE"
//                       ]
//                     }
//                   },
//                   ".dev"
//                 ]
//               }
//             }
//           ]
//         }
//       }
//     ]
//   }
// }
