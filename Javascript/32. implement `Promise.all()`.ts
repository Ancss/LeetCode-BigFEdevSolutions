// The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises

// source - MDN

// Could you write your own all() ? which should works the same as Promise.all()

// note

// Do not use Promise.all() directly, it is not helping

function all(promises) {
  if(!promises.length){return Promise.resolve([])}
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
    }).catch(error => {
      reject(error)
    })
    )
  })
}