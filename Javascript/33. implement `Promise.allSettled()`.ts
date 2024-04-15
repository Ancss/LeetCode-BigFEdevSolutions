
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
  if (!promises.length) { return Promise.resolve([]) }
  promises = promises.map(promise => promise instanceof Promise ? promise : Promise.resolve(promise))
  const result: any[] = []
  let waitingFor = promises.length
  return new Promise((resolve, reject) => {
    promises.forEach((promise, i) => promise.then(data => {
      result[i] = data
      waitingFor--
      if (waitingFor === 0) {
        resolve(result)
      }
    }, error => {
      result[i] = error
      waitingFor--
      if (waitingFor === 0) {
        resolve(result)
      }
    })
    )
  })
}

