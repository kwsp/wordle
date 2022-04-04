import { writable } from 'svelte/store'

export let shakeRowState = writable(false)

export function shakeCurrentRow() {
  shakeRowState.set(true)
  setTimeout(() => shakeRowState.set(false), 500)
}
