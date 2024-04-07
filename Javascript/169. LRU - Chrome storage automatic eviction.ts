
// This is a JavaScript coding problem from BFE.dev 
// https://bigfrontend.dev/problem/lru-chrome-storage-eviction

interface OriginData {
  origin: string
  lastUsed: number
  size: number
  persistent: boolean
}

interface LRUStorage {
  capacity: number
  // to use the data for origin
  // return size of the data or undefined if not exist
  getData(origin: string): OriginData | undefined

  // updating data for origin
  // return boolean to indicate success or failure
  // If the total size exceeds capacity,
  // Least Recently Used non-persistent origin data other than itself should be evicted.

  setData(origin: string, size: number): boolean

  // manually clear data for origin
  clearData(origin: string): void

  // change data for origin to be persistent
  // it only handles existing data not the data added later
  // persistent data cannot be evicted unless manually clear it
  makePersistent(origin: string): void
}

interface OriginData {
  origin: string
  lastUsed: number
  size: number
  persistent: boolean
}

// interface LRUStorage {
//   capacity: number
//   getData(origin: string): OriginData | undefined
//   setData(origin: string, size: number): boolean
//   clearData(origin: string): void
//   makePersistent(origin: string): void
// }

class MyLRUStorage implements LRUStorage {
  capacity: number
  currentCapacity: number
  cache: OriginData[]
  getTimestamp: () => number
  constructor(capacity: number, getTimestamp: () => number) {
    this.cache = []
    this.capacity = capacity
    this.currentCapacity = 0
    this.getTimestamp = getTimestamp
  }
  getData(origin: string): OriginData | undefined {
    const index = this.cache.findIndex((data) => data.origin === origin)
    if (index === -1) return undefined
    const data = this.cache[index]
    this.cache.splice(index, 1)
    this.cache.unshift(data)
    return data
  }
  setData(origin: string, size: number): boolean {
    if (size > this.capacity) return false

    const originData = this.getData(origin)
    if (originData) {
      this.currentCapacity -= originData.size
      originData.size = size
      console.log(this.cache, this.currentCapacity)
    } else {
      this.cache.unshift({
        origin,
        lastUsed: this.getTimestamp(),
        size: size,
        persistent: false,
      })
    }
    this.currentCapacity += size
    // console.log(this.currentCapacity)
    if (this.currentCapacity > this.capacity) {
      let i = this.cache.length - 1
      console.log(i)
      while (i > 0) {
        if (this.cache[i].persistent === false) {
          this.currentCapacity -= this.cache[i].size
          this.cache.splice(i, 1)
          if (this.currentCapacity <= this.capacity) {
            break
          }
        }
        i--
      }
      if (i <= 0) {
        this.cache.shift()
        this.currentCapacity -= size

        return false

      }

    }

    return true
  }
  clearData(origin: string): void {
    const index = this.cache.findIndex((data) => data.origin === origin)
    if (index === -1) return
    this.currentCapacity -= this.cache[index].size
    this.cache.splice(index, 1)
  }
  makePersistent(origin: string): void {
    const index = this.cache.findIndex((data) => data.origin === origin)
    if (index === -1) return
    this.cache[index].persistent = true
  }
}

const storage = new MyLRUStorage(10, () => new Date().getTime())
storage.setData('a', 1)
storage.setData('b', 3)
storage.makePersistent('a')
storage.makePersistent('b')
const result = storage.setData('c', 7)
storage.clearData('b')
storage.setData('c', 7)
// expect(result).toBe(true)
console.log(result)
console.log(storage.getData('a'))
console.log(storage.getData('b'))
console.log(storage.getData('c'))
// expect(storage.getData('a')).toBeUndefined()
// expect(storage.getData('b').size).toBe(3)
// expect(storage.getData('c').size).toBe(7)
