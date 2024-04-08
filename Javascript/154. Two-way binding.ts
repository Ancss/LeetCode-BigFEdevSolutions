// Let's do some simple two-way binding.

// Please create a function model(state, element), to bind state.value to the HTMLInputElement element.

// const input = document.createElement('input')
// const state = { value: 'BFE' }
// model(state, input)

// console.log(input.value) // 'BFE'
// state.value = 'dev'
// console.log(input.value) // 'dev'
// input.value = 'BFE.dev'
// input.dispatchEvent(new Event('change'))
// console.log(state.value) // 'BFE.dev'

function model(state: { value: string }, element: HTMLInputElement) {
  element.value = state.value

  Object.defineProperty(state, 'value', {
    get() { return element.value },
    set(v) { element.value = v }
  })

  element.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement
    state.value = target!.value
  })
}