// Given an array of integers, all integers appear twice except one integer, could you quickly target it ?

const arr = [10, 2, 2 , 1, 0, 0, 10]
console.log(findSingle(arr)) // 1
// What is time & space cost of your approach ? Could you do better ?


function findSingle(arr: number[]): number {
  const map:any = {} 
  for (let [key,int] of Object.entries(arr)) {
    if (map[int] === undefined) map[int] = 0
    map[int]+=1
  }
  for (let [key, value] of Object.entries(map)) {
    if (value === 1) {
      return +key
    }
  }
  return 0
}