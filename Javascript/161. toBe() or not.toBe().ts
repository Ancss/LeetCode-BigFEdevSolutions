// Here are some simple Jest test code.

// expect(3).toBe(3) // ✅
// expect(4).toBe(3) // ❌
// // We can reverse it with not.

// expect(3).not.toBe(3) // ❌
// expect(4).not.toBe(3) // ✅
// Please implement myExpect() to support toBe() and also not.

interface Matcher {
  toBe(data: any): void
}

function myExpect(input: any): Matcher & { not: Matcher } {
  return {
    toBe(v) {
      if (!Object.is(input, v)) {
        throw new Error()
      }
      return true
    },
    not: {
      toBe(v) {
        if (Object.is(input, v)) {
          throw new Error()
        }
        return true
      }
    }
  }
}

console.log(myExpect(4).toBe(3))
export const expect = myExpect



