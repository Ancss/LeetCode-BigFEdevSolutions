// Math.clz32() returns the number of leading zero bits in the 32-bit binary representation of a number.

// This is a JavaScript coding problem from BFE.dev 

function clz32(num: number): number {
  if(!isFinite(num)){return 32}
  if (num < 0) {
    return 0
  }
  const bits = num.toString(2).split('.')[0].slice(-32).padStart(32, '0').split('1')[0]
  console.log(bits.length)
  return bits.length
}




// Let's try to implement it by ourselves.

clz32(1) // 31
clz32(10000) // 18
clz32(25.45) // 27
clz32(4294967297) // 31
clz32(4294967296) // 32
clz32(4294967295) // 0