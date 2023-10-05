import { writable } from 'svelte/store'
import { localStore } from './localStore.js'

export const alert = writable('Welcome to the Quote list app!')

const initialQuotes = [
  { id: 1, name: 'Add a quote', completed: true },
  { id: 2, name: 'Be the change you with to see in the world.', completed: false },
]

export const quotes = localStore('mdn-svelte-quote', initialQuotes)