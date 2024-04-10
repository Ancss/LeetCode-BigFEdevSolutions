// Say you have multiple versions of a program, write a program that will find and return the first bad revision given a isBad(version) function.

// Versions after first bad version are supposed to be all bad versions.

// notes

// Inputs are all non-negative integers
// if none found, return -1

type IsBad = (version: number) => boolean

function firstBadVersion(isBad: IsBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  const check = (x) => isBad(x) ? check(x - 1) : x + 1
  return (version: number): number => {
    // write your code to return the first bad version
    // if none found, return -1
    return isBad(version) ? check(version) : -1
  }
}