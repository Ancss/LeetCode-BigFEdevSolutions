// Suppose you have solved 110. serialize and deserialize binary tree, have you wondered how to do similar task to DOM tree ?

// HTML string could be thought as some sort of serialization, the browser parses(deserialize) the HTML → construct the DOM tree.

// Besides XML base, we could try JSON for this. If we log the element presentation in React, like below

// const el = <div>
//  <h1> this is </h1>
//  <p className="paragraph"> a <button> button </button> from <a href="https://bfe.dev"><b>BFE</b>.dev</a>
//  </p>
// </div>;

// console.log(el)
// we would get this( ref, key .etc are stripped off)

// {
//   type: 'div',
//   props: {
//     children: [
//       {
//         type: 'h1',
//         props: {
//           children: ' this is '
//         }
//       },
//       {
//         type: 'p',
//         props: {
//           className: 'paragraph',
//           children: [
//             ' a ',
//             {
//               type: 'button',
//               props: {
//                 children: ' button '
//               }
//             },
//             ' from',
//             {
//               type: 'a',
//               props: {
//                 href: 'https://bfe.dev',
//                 children: [
//                   {
//                     type: 'b',
//                     props: {
//                       children: 'BFE'
//                     }
//                   },
//                   '.dev'
//                 ]
//               }
//             }
//           ]
//         }
//       }
//     ]
//   }
// }
// Clearly this is the same tree structure but only in object literal.

// Now you are asked to serialize/deserialize the DOM tree, like what React does.

// Note

// Functions like event handlers and custom components are beyond the scope of this problem, you can ignore them, just focus on basic HTML tags.

// You should support:

// TextNode (string) as children
// single child and multiple children
// camelCased properties.
// virtualize() takes in a real DOM tree and create an object literal render() takes in a object literal presentation and recreate a DOM tree.

/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
export interface MyElement {
  type: string,
  props: {
    className?: string
    children: string | string[] | MyElement[]
  }
}
function virtualize(element: HTMLElement): any {
  const result: MyElement = {
    type: element.tagName.toLowerCase(),
    props: {
      children: []
    }
  }
  if (element.hasAttributes()) {
    for (let { name, value } of element.attributes) {
      result.props[name === 'class' ? 'className' : name] = value
    }
  }
  const children: string[] = []
  if (element.hasChildNodes()) {
    for (let child of element.childNodes) {
      if (child.nodeType === 3) {
        children.push(child.textContent!)
      } else {
        children.push(virtualize(child as HTMLElement))
      }
    }
  }
  result.props.children = children.length === 1 ? children[0] : children
  return result
}


/**
 * @param {object} valid object literal presentation
 * @return {HTMLElement} 
 */
function render(obj: MyElement): HTMLElement {

  let { type, props: { className, children, ...resetProps } } = obj
  const parent = document.createElement(type)
  if (className) parent.classList.add(className)

  if (!Array.isArray(children)) {
    children = [children]
  }
  children.forEach(child => {
    if (typeof child === 'string') {
      parent.append(document.createTextNode(child))
    } else {
      parent.append(render(child))
    }
  })
  for (let [key, value] of Object.entries(resetProps)) {
    parent.setAttribute(key, value as string)
  }
  return parent
}
