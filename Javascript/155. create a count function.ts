// Please create a function count(), when called it should return how many times it has been called, count.reset() should also implemented.

// count() // 1
// count() // 2
// count() // 3

// count.reset()

// count() // 1
// count() // 2
// count() // 3

function count() {
  return ++count._count
}
count._count = 0
count.reset = () => count._count = 0