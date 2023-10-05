import { writable } from 'svelte/store'
import { localStore } from './localStore.js'

export const alert = writable('Welcome to the Quote app!')

const initialQuotes = [
  { id: 1, name: 'However difficult life may seem, there is always something you can do and succeed at. - Stephen Hawking', completed: true },
  { id: 2, name: 'People begin to become successful the minute they decide to be. - Harvey MacKay', completed: false },
  { id: 3, name: 'It always seems impossible until it`s done. - Nelson Mandela', completed: false },
  { id: 4, name: 'Success isn`t overnight. It`s when everyday you get a little better than the day before. It all adds up. - Dwayne Johnson', completed: false },
  { id: 5, name: 'It does not matter how slowly you go as long as you do not stop. - Confucius', completed: false },
  { id: 6, name: 'The more you praise and celebrate your life, the more there is in life to celebrate. - Oprah Winfrey', completed: false },
  { id: 7, name: 'Success consists of going from failure to failure without loss of enthusiasm. - Winston Churchill', completed: false },
  { id: 8, name: 'Do what you can, with what you`ve got, where you are. - Teddy Roosevelt', completed: false },
  { id: 9, name: 'Talent alone won`t make you a success. Neither will being in the right place at the right time, unless you are ready. - Johnny Carson', completed: false },
  { id: 10, name: 'Fortune befriends the bold. - Emily Dickinson', completed: false },
]

export const quotes = localStore('mdn-svelte-quote', initialQuotes)