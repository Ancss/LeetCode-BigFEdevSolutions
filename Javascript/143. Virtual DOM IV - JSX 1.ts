// If you are using React, you must be familiar with JSX.

// With JSX syntax support, transpilers are able to understand below non-standard code directly in JavaScript.

// <p> this is <button className="button">button</button> </p>
// Then it is transpiled to standard JavaScript function calls.

// React.createElement("p", null,
//   " this is ",
//   React.createElement("button", { className: "button" }, "button"),
//   " ");
// have a try at TypeScript Playground

// To illustrate how the transpilation works, let's start with a simple example.

// <a>bfe.dev</a>
// First the parser will create an AST(Abstract Syntax Tree) from the code.

// Open above code in AST Explorer, you can see the AST in the right pannel, roughly something like this:

// expression: JSXElement {
//   openingElement: JSXOpeningElement {
//     name: JSXIdentifier {
//       name: "a"
//     }
//   }
//   closingElement: JSXClosingElement {
//     name: JSXIdentifier {
//       name: "a"
//     }
//   }
//   children: [
//     JSXText {
//       value: "bfe.dev"
//     }
//   ]
// }
// Obviously above AST follows the JSX Spec:

// JSXElement:
//   JSXOpeningElement JSXChildren? JSXClosingElement

// JSXOpeningElement:
//   < JSXElementName JSXAttributes? >

// JSXChildren:
//   JSXChild JSXChildren?

// JSXClosingElement:
//   < / JSXElementName >

// JSXChild:
//   JSXText
//   JSXElement
//   { JSXChildExpression? }
// With the above AST, it is fairly easy to generate code, we only need to traverse the AST and insert React.createElement:

// React.createElement("p", null,
//   " this is ",
//   React.createElement("button", { className: "button" }, "button"),
//   " ");
// Also instead of React method, we could use h() defined in 140. Virtual DOM III - Functional Component instead.

// h("p", null,
//   " this is ",
//   h("button", { className: "button" }, "button"),
//   " ");
// Now, please create your own parse() and generate() to transpile JSX Element code.

// please generate code which uses h(), h() is bundled with your code.
// Goal of this problem is not to recreate the full parser, so only need to support the minumum spec below:
// JSXElement:
//   JSXOpeningElement JSXChildren? JSXClosingElement

// JSXOpeningElement:
//   < JSXElementName >

// JSXChildren:
//   JSXChild

// JSXClosingElement:
//   < / JSXElementName >

// JSXChild:
//   JSXText
// you can choose not to follow the naming
// there is no newlines in the input, you can ignore the whitespace rules
// all input tags are smallcase HTML tags
// for simplicity, the AST creating process with parse() won't be tested, rather parse() and generate() are tested together like this:
// const result = eval(generate(parse('<a>bfe.dev</a>')))
// expect(result).toEqual(h('a', null, 'bfe.dev'))
// An error should be thrown if code is not valid JSXElement, for example, the JSXOpeningElement and JSXClosingElement might not be matched.
// The test cases only cover some of the common errors.

/**
 * @param {code} string
 * @returns {any} AST
 */
function parse(code) {
  // validate string
  code = code.trim();
  if (code[0] !== "<" || code[code.length - 1] !== ">") {
    return;
  }
  if (code.split("<").length !== code.split(">").length) {
    return;
  }

  // process opening tag
  var openTagIndex = code.indexOf("<");
  var closeTagIndex = code.indexOf(">");
  var s = code.slice(openTagIndex + 1, closeTagIndex).trim();
  if (s.indexOf("/") >= 0) {
    // error check in opening tag
    return;
  }
  var arr = s.split(" ");
  var tagName = arr[0];
  // process props on current tag
  var props = {};
  for (var i = 1; i < arr.length; i++) {
    var [k, v] = arr[i].split("=");
    props[k] = v;
  }

  // process closing tag
  var lastOpenTagIndex = code.lastIndexOf("<");
  var lastCloseTagIndex = code.lastIndexOf(">");
  var tagName2 = code
    .slice(lastOpenTagIndex + 1, lastCloseTagIndex)
    .replaceAll(" ", "");
  if (tagName2[0] !== "/" || tagName !== tagName2.slice(1)) {
    // error check in closing tag
    return;
  }

  // process child text string
  var child = code.slice(closeTagIndex + 1, lastOpenTagIndex); // NO trim() on child texts
  props.children = child ? [child] : [];

  return {
    openingElement: {
      name: tagName
    },
    closingElement: {
      name: tagName
    },
    props
  };
}
/**
 * @param {any} your AST
 * @returns {string}
 */
function generate(ast) {
  return {
    type: ast.openingElement.name,
    props: ast.props
    // {
    //   ...props,
    //   children
    // }
  };
}