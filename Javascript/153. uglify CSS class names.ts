// If you use css - loader in your webpack project, localIdentName could be used to transform class names, like below:

// localIdentName: "[path][name]__[local]--[hash:base64:5]",
//   Or you can create your own function to generate class names by setting getLocalIdent.

// Now please create a function to generate unique class names following rules below.

// only use alphabets: a to z, A to Z
// return one unique class name each time function is called
// the class name sequence should first be in order of length, then in Alphabetical order(lowercase in front).
// should provide a function to reset the sequence
// getUniqueClassName()
// // 'a'

// getUniqueClassName()
// // 'b'

// getUniqueClassName()
// // 'c'

// // skip cases till 'Y'

// getUniqueClassName()
// // 'Z'

// getUniqueClassName()
// // 'aa'

// getUniqueClassName()
// // 'ab'

// getUniqueClassName()
// // 'ac'

// // skip more cases

// getUniqueClassName()
// // 'ZZ'

// getUniqueClassName()
// // 'aaa'

// getUniqueClassName()
// // 'aab'

// getUniqueClassName()
// // 'aac'

// getUniqueClassName.reset()

// getUniqueClassName()
// // 'a'
const getUniqueClassName = (() => {
  function getUniqueClassName() {
    // 26 A
    // 51 Z
    // 52 Za
    // 77 ZB
    const lowerAlphaCharPoint = 97
    const upperAlphaCharPoint = 65
    let className = ''
    while (getUniqueClassName.count > 0) {
      let mod = (getUniqueClassName.count - 1) % 52
      console.log(className)
      className = String.fromCharCode(mod < 26 ? (97/*a*/ + mod) : (65/*A*/ + (mod - 26))) + className
      getUniqueClassName.count = Math.floor((getUniqueClassName.count - 1) / 52)
    }
    console.log(className)
    return className

  }
  getUniqueClassName.count = 5200
  getUniqueClassName.reset = () => getUniqueClassName.count = 0
  return getUniqueClassName
})()
getUniqueClassName()