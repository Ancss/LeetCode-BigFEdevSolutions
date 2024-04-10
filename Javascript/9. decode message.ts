// Your are given a 2-D array of characters. There is a hidden message in it.

// I B C A L K A
// D R F C A E A
// G H O E L A D 
// The way to collect the message is as follows

// start at top left
// move diagonally down right
// when cannot move any more, try to switch to diagonally up right
// when cannot move any more, try switch to diagonally down right, repeat 3
// stop when cannot neither move down right or up right. the character on the path is the message
// for the input above, IROCLED should be returned.

// notes

// if no characters could be collected, return empty string
// function decode(message: string[][]): string {
//   if (!message.length) { return '' }
//   if (!message[0].length) return ''
//   let vertical = 'bottom'
//   let horizontal = 'right'
//   let leftIndex = 0
//   let topIndex = 0
//   let str = ''
//   let i = 0
//   while (i < 20) {
//     str += message[topIndex][leftIndex]
//     if (message.length === 1) {
//       vertical = 'center'
//     } else if (topIndex === message.length - 1) {
//       vertical = 'top'
//     } else if (topIndex === 0) {
//       vertical = 'bottom'
//     }
//     if (vertical === 'bottom') {
//       topIndex += 1
//     } else if (vertical === 'center') {
//       // 
//     } else {
//       topIndex -= 1
//     }
//     leftIndex++
//     console.log(topIndex)
//     if (leftIndex >= message[topIndex].length) {
//       break
//     }

//     i++
//   }
//   console.log(str)
//   return str
// }

function decode(message: string[][]): string {
  let i = 0; let j = 0; let cols = message[0].length
  let decoded = ''; let step = 1
  while (j < cols) {
    decoded += message[i][j]
    if (!message[i + step]) {
      step *= -1
    }
    i += step
    j++
  }
  return decoded
}
const input = [
  ['I', 'B', 'C', 'A', 'L', 'K', 'A'],
  ['D', 'R', 'F', 'C', 'A', 'E', 'A'],
  ['G', 'H', 'O', 'E', 'L', 'A', 'D']
]

decode(input)