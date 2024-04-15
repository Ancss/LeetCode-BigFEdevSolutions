// This problem is similar to 31. implement async helper - race(), but with Promise.

// The Promise.race() method returns a promise that fulfills or rejects as soon as one of the promises in an iterable fulfills or rejects, with the value or reason from that promise. source: MDN

// Can you create a race() which works the same as Promise.race()?

function race(promises) {
  if (!promises.length) { throw new AggregateError("No Promise passed"); }
  promises = promises.map(promise => promise instanceof Promise ? promise : Promise.resolve(promise))
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(data => resolve(data)).catch(reject)
    })
  })
}