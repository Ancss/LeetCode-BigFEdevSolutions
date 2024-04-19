// setTimeout adds task in to a task queue to be handled later, the time actually is no accurate. (Event Loop).

// This is OK in general web application, but might be problematic in test.

// For example, at 5. implement throttle() with leading & trailing option we need to test the timer with more accurate approach.

// Could you implement your own setTimeout() and clearTimeout() to be sync? so that they have accurate timing for test. This is what FakeTimes are for.

// By "accurate", it means suppose all functions cost no time, we start our function at time 0, then setTimeout(func1, 100) would schedule func1 exactly at 100.

// You need to replace Date.now() as well to provide the time.



// fakeTimer.uninstall()
// Note

// Only Date.now() is used when judging your code, you can ignore other time related apis.
declare global {
  interface Window {
    originalSetTimeout: typeof setTimeout;
    setTimeout: (handler: TimerHandler, timeout?: number, ...args: any[]) => number;
  }
}
class FakeTimer {
  originSetTimeout!: ((handler: TimerHandler, timeout?: number | undefined,) => number) & typeof setTimeout;
  originClearTimeout!: ((id: number | undefined) => void) & { (id: number | undefined): void; (timeoutId: NodeJS.Timeout): void; };
  originDateNow!: () => number;
  index!: number
  currentTime!: number
  queue: any[] = []
  install() {
    this.originSetTimeout = window.setTimeout
    this.originClearTimeout = window.clearTimeout
    this.originDateNow = window.Date.now
    this.index = 1
    this.currentTime = 0


    window.setTimeout = this.setTimeout
    window.clearTimeout = this.clearTimeout
    window.Date.now = this.now

  }
  setTimeout(handler, ms, ...args) {
    this.queue.push({ id: this.index, handler, ms: ms, args })
    this.queue.sort((a, b,) => a.ms - b.ms)
    return ++this.index as any
  }
  clearTimeout(id) {
    const i = this.queue.findIndex(item => item.id === id)
    if (i > -1) {
      this.queue.splice(i, 1)
    }
  }
  now() {
    return this.currentTime
  }
  uninstall() {
    // restore the original APIs
    // setTimeout(), clearTimeout() and Date.now()

    window.setTimeout = this.originSetTimeout
    window.clearTimeout = this.originClearTimeout
    window.Date.now = this.originDateNow
  }

  tick() {
    // run all the schedule functions in order
    for (let [id, handler, ms, args] of this.queue) {
      this.currentTime = ms
      handler(...args)
    }

  }
}



const fakeTimer = new FakeTimer()
fakeTimer.install()

const logs: any[] = []
const log = (arg) => {
  logs.push([Date.now(), arg])
}

setTimeout(() => log('A'), 100)
// log 'A' at 100

const b = setTimeout(() => log('B'), 110)
clearTimeout(b)
// b is set but cleared

setTimeout(() => log('C'), 200)

console.log(logs)
// expect(logs).toEqual([[100, 'A'], [200, 'C']])

export { }