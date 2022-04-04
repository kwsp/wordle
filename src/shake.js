import { writable } from 'svelte/store'

export let shakeState = writable(false)

export function shakeCurrentRow() {
  shakeState.set(true)
  setTimeout(() => shakeState.set(false), 500)
}
