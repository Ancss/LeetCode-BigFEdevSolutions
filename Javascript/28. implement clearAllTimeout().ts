// window.setTimeout() could be used to schedule some task in the future.

// Could you implement clearAllTimeout() to clear all the timers ? This might be useful when we want to clear things up before page transition.

// For example


// setTimeout(func1, 10000)
// setTimeout(func2, 10000)
// setTimeout(func3, 10000)

// // all 3 functions are scheduled 10 seconds later
// clearAllTimeout()

// // all scheduled tasks are cancelled.
// note

// You need to keep the interface of window.setTimeout and window.clearTimeout the same, but you could replace them with new logic

const originSetTimeout = window.setTimeout
const originClearTimeout = window.clearTimeout

interface Window {
  __cb__: any

}

window.setTimeout = function (callback: (...args: any[]) => void, ms: number, ...args: any[]): number {
  if (!window.__cb__) { window.__cb__ = {} }
  const randomId = Math.floor(Math.random() * Math.random() * 1000000000)
  window.__cb__[randomId] = originSetTimeout(() => callback(...args), ms)
  return randomId
}
window.clearTimeout = function (id) {
  if (!window.__cb__) { window.__cb__ = {} }
  const timeoutId = window.__cb__[id]
  if (timeoutId != null) {
    originClearTimeout(timeoutId)
    delete window.__cb__[id]
  }
}
function clearAllTimeout() {
  for (let [_, timeoutId] of Object.entries(window.__cb__)) {
    if (timeoutId != null) {
      originClearTimeout(timeoutId as number)
    }
  }
}